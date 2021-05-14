import { CompatData, CompatStatement } from "@mdn/browser-compat-data/types";
import * as Browser from "../types";
import { filterMapRecord, isEmptyRecord } from "../utils/record.js";
import { mapDefined } from "../helpers.js";
import resolveMixinSupportData from "./resolve-mixin.js";

interface DataToMap {
  key: string;
  compat?: CompatStatement;
  webkit?: boolean;
  mixin: boolean;
  parentKey?: string;
}

function mapInterfaceLike(
  name: string,
  i: Browser.Interface,
  bcdResolved: CompatData,
  mapper: (data: DataToMap) => any
) {
  const intCompat = bcdResolved.api[name]?.__compat;
  const mapped = mapper({ key: name, compat: intCompat, mixin: !!i.mixin });
  if (!intCompat) {
    if (mapped) {
      return { name: i.name, ...mapped };
    }
    return;
  }
  const result = { ...mapped };

  const recordMapper = (key: string) => {
    const compat = bcdResolved.api[name][key]?.__compat;
    return mapper({
      key,
      parentKey: name,
      webkit: key.startsWith("webkit"),
      compat,
      mixin: !!i.mixin,
    });
  };
  const methods = filterMapRecord(i.methods?.method, recordMapper);
  const properties = filterMapRecord(i.properties?.property, recordMapper);
  if (!isEmptyRecord(methods)) {
    result.methods = { method: methods! };
  }
  if (!isEmptyRecord(properties)) {
    result.properties = { property: properties! };
  }
  if (!isEmptyRecord(result)) {
    return { name: i.name, ...result };
  }
}

export function mapToBcdCompat(
  webidl: Browser.WebIdl,
  mapper: (data: DataToMap) => any
): Browser.WebIdl | undefined {
  const bcdResolved = resolveMixinSupportData(webidl);
  const map = (name: string, i: Browser.Interface) =>
    mapInterfaceLike(name, i, bcdResolved, mapper);

  const interfaces = filterMapRecord(webidl.interfaces?.interface, map);
  const mixins = filterMapRecord(webidl.mixins?.mixin, map);
  const namespaces = mapDefined(webidl.namespaces, (n) =>
    mapInterfaceLike(n.name, n, bcdResolved, mapper)
  );
  if (
    !isEmptyRecord(interfaces) ||
    !isEmptyRecord(mixins) ||
    !isEmptyRecord(namespaces)
  ) {
    return {
      interfaces: interfaces && { interface: interfaces },
      mixins: mixins && { mixin: mixins },
      namespaces,
    };
  }
}
