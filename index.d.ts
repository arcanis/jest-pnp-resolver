type JestResolverOptions<T> = {
  basedir: string;
  defaultResolver: T;
  extensions?: Array<string>,
};

export default function resolve<D extends (request: string, options: JestResolverOptions<D>) => any>(
  request: string, 
  options: JestResolverOptions<D>
): ReturnType<D>
