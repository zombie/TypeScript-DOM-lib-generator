import { SimpleSupportStatement } from "@mdn/browser-compat-data/types";

export function hasStableImplementation(
  browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined,
  prefix?: string
): boolean {
  if (!browser) {
    return false;
  }
  const latest = !Array.isArray(browser)
    ? browser
    : browser.find((i) => i.prefix === prefix); // first one if no prefix
  if (!latest) {
    return false;
  }
  return (
    !!latest.version_added &&
    !latest.version_removed &&
    !latest.flags &&
    latest.prefix === prefix &&
    !latest.alternative_name
  );
}
