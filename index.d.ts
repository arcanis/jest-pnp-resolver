type JestResolverOptions = {
  basedir: string;
  defaultResolver: (request: string, opts: any) => string,
  extensions?: ReadonlyArray<string>,
};

export default function resolve(
  request: string,
  options: JestResolverOptions,
): string;
