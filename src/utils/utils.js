// %======================== utils ========================% //

export const toCamelCase = (value) =>
  value.replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));

export const generatePaths = (basePath, names, extension) =>
  Object.fromEntries(
    names.map((name) => [toCamelCase(name), `${basePath}/${name}${extension}`]),
  );
