export function createSearchParams(options: Record<string, any> | undefined) {
  if (!options) return undefined;
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(options)) {
    searchParams.set(key, value.toString());
  }
  return searchParams;
}
