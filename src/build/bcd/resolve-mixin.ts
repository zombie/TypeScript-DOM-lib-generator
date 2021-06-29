import * as Browser from "../types";
import bcd from "@mdn/browser-compat-data";
import {
  CompatData,
  CompatStatement,
  Identifier,
  PrimaryIdentifier,
  SimpleSupportStatement,
} from "@mdn/browser-compat-data/types";
import { hasStableImplementation } from "./stable.js";
import { addToArrayMap } from "../utils/map.js";

function trackMixinInclusions(interfaces: Browser.Interface[]) {
  const map = new Map<string, Browser.Interface[]>();
  for (const i of interfaces) {
    for (const include of i.implements ?? []) {
      addToArrayMap(map, include, i);
    }
  }
  return map;
}

function mergeCompatStatements(statements: CompatStatement[]): CompatStatement {
  const base = Object.fromEntries(
    Object.keys(statements[0].support).map((key) => {
      return [key, [] as SimpleSupportStatement[]];
    })
  );

  for (const statement of statements) {
    for (const key of Object.keys(statement.support)) {
      const support = statement.support[key];
      if (support && hasStableImplementation(support)) {
        base[key].push(...(Array.isArray(support) ? support : [support]));
      }
    }
  }

  return { ...statements[0], support: base };
}

export default function resolveMixinSupportData(
  webidl: Browser.WebIdl
): CompatData {
  const inclusionMap = trackMixinInclusions(
    Object.values(webidl.interfaces?.interface ?? {})
  );
  const result: Record<string, Identifier> = {};
  for (const mixin of Object.values(webidl.mixins?.mixin ?? {})) {
    const interfaces = inclusionMap.get(mixin.name);
    if (!interfaces) {
      continue;
    }
    const mixinResult: Map<string, CompatStatement[]> = new Map();
    const memberKeys = [
      ...Object.keys(mixin.methods.method),
      ...Object.keys(mixin.properties?.property ?? {}),
    ];
    for (const memberKey of memberKeys) {
      for (const i of interfaces) {
        const compat = bcd.api[i.name]?.[memberKey]?.__compat;
        if (compat) {
          addToArrayMap(mixinResult, memberKey, compat);
        }
      }
    }
    if (mixinResult.size > 0) {
      result[mixin.name] = {
        __compat: { support: {} },
        ...Object.fromEntries(
          [...mixinResult.entries()].map(([key, value]) => {
            return [
              key,
              { __compat: mergeCompatStatements(value) } as Identifier,
            ];
          })
        ),
        ...bcd.api[mixin.name],
      } as PrimaryIdentifier;
    }
  }

  return {
    ...bcd,
    api: { ...bcd.api, ...result } as PrimaryIdentifier,
  } as CompatData;
}
