import * as Browser from "./types";
import bcd from "@mdn/browser-compat-data";
import { Identifier, SimpleSupportStatement, SupportBlock } from "@mdn/browser-compat-data/types";

const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  "AbstractRange": [ // Blink only implements them in the subinterfaces
    "collapsed",
    "endContainer",
    "endOffset",
    "startContainer",
    "startOffset"
  ],
  "Animation": ["finished", "pending", "ready", "updatePlaybackRate"],
  "AnimationPlaybackEvent": ["currentTime", "timelineTime"],
  "ByteLengthQueuingStrategy": ["size"],
  "ConstantSourceNode": ["offset"],
  "CountQueuingStrategy": ["size"],
  "ExtendableMessageEvent": ["lastEventId", "origin", "ports", "source"],
  "Gamepad": ["hapticActuators"],
  "GamepadHapticActuator": ["type"],
  "GlobalEventHandlers": [
    "onabort",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart"
  ],
  "HTMLIFrameElement": ["allowPaymentRequest"],
  "KeyframeEffect": [
    "composite",
    "iterationComposite",
    "getKeyframes",
    "setKeyframes",
  ],
  "NavigatorPlugins": ["javaEnabled", "mimeTypes", "plugins"],
  "OfflineAudioContext": ["resume"],
  "Request": ["keepalive"],
  "RTCDtlsTransport": ["onstatechange", "state"],
  "RTCPeerConnection": ["canTrickleIceCandidates"],
  "RTCRtpSender": ["transport"],
  "RTCStatsReport": [],
  "SharedWorkerGlobalScope": ["close"],
  "ServiceWorkerGlobalScope": ["onmessageerror"],
  "TextDecoderStream": [],
  "TextEncoderStream": [],
  "TrackEvent": ["track"],
  "TransformStream": ["readable", "writable"],
  "WebKitCSSMatrix": [],
  "WindowEventHandlers": ["onmessage"],
  "WritableStream": ["abort", "getWriter", "locked"],

  // Widely supported but without being correctly exposed to global
  "ReadableStreamDefaultReader": ["closed", "cancel", "read", "releaseLock"],
  "ReadableStreamDefaultController": ["desiredSize", "close", "enqueue", "error"],
  "TransformStreamDefaultController": ["desiredSize", "enqueue", "error", "terminate"],
  "WebGLVertexArrayObjectOES": [],
  "WritableStreamDefaultController": ["error"],
  "WritableStreamDefaultWriter": [
    "abort",
    "close",
    "closed",
    "desiredSize",
    "ready",
    "releaseLock",
    "write",
  ],
};

function hasMultipleImplementations(support: SupportBlock) {
  function hasStableImplementation(browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined) {
    if (!browser) {
      return false;
    }
    const latest = Array.isArray(browser) ? browser[0] : browser;
    return latest.version_added && !latest.version_removed && !latest.flags;
  }
  let count = 0;
  if (hasStableImplementation(support.chrome) || hasStableImplementation(support.chrome_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.firefox) || hasStableImplementation(support.firefox_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.safari) || hasStableImplementation(support.safari_ios)) {
    count += 1;
  }
  return count >= 2;
}

function isEmpty(o: object) {
  return !Object.keys(o).length;
}

function isSuitable(key: string, value: Identifier, parentKey?: string) {
  const forceAlive = parentKey ? forceKeepAlive[parentKey]?.includes(key) : !!forceKeepAlive[key];
  if (value.__compat && hasMultipleImplementations(value.__compat.support)) {
    if (forceAlive) {
      if (parentKey) {
        console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`)
      } else if (!forceKeepAlive[key].length) {
        console.warn(`Redundant forceKeepAlive item: ${key}`)
      }
    }
    return true;
  }
  return forceAlive;
}

export function getRemovalDataFromBcd(webidl: Browser.WebIdl) {
  function getDefinition(key: string) {
    if (webidl.interfaces!.interface.hasOwnProperty(key)) {
      return {
        type: "interface",
        base: webidl.interfaces!.interface[key]
      };
    } else if (webidl.mixins!.mixin.hasOwnProperty(key)) {
      return {
        type: "mixin",
        base: webidl.mixins!.mixin[key]
      };
    }
  }

  const interfaces: Record<string, object> = {};
  const mixins: Record<string, object> = {};
  for (const [key, value] of Object.entries(bcd.api)) {
    const definition = getDefinition(key);
    if (!definition) {
      continue;
    }
    const { base } = definition
    if (!isSuitable(key, value)) {
      if (definition.type === "interface") {
        interfaces[key] = { exposed: "" };
      }
      continue;
    }

    const methods: Record<string, object> = {};
    const properties: Record<string, object> = {};
    for (const [memberKey, memberValue] of Object.entries(value)) {
      if (!isSuitable(memberKey, memberValue, key)) {
        if (base.methods.method.hasOwnProperty(memberKey)) {
          methods[memberKey] = { exposed: "" };
        } else if (base.properties!.property.hasOwnProperty(memberKey)) {
          properties[memberKey] = { exposed: "" };
        }
      }
    }
    const removalItem: Record<string, object> = {};
    if (!isEmpty(methods)) {
      removalItem.methods = { method: methods };
    }
    if (!isEmpty(properties)) {
      removalItem.properties = { property: properties };
    }
    if (!isEmpty(removalItem)) {
      if (definition.type === "interface") {
        interfaces[key] = removalItem;
      } else {
        mixins[key] = removalItem;
      }
    }
  }
  return { interfaces: { interface: interfaces }, mixins: { mixin: mixins } };
}
