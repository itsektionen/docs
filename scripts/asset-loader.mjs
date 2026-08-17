const assetPattern = /\.(?:avif|css|gif|ico|jpe?g|png|svg|webp)$/i;

export async function load(url, context, nextLoad) {
  if (!assetPattern.test(url)) {
    return nextLoad(url, context);
  }

  if (url.toLowerCase().endsWith(".css")) {
    return {
      format: "module",
      shortCircuit: true,
      source:
        "export default new Proxy({}, { get: (_, property) => String(property) });",
    };
  }

  return {
    format: "module",
    shortCircuit: true,
    source: "export default function Asset() { return null; }",
  };
}
