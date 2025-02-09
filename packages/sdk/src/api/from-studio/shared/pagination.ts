import { MetaData } from "../schemas";

export async function paginateResults<T, R extends { page: number }>({
  results,
  params,
  handler,
}: {
  params: R;
  results: Array<T>;
  handler: ({
    params,
  }: {
    params: R;
  }) => Promise<{ meta: MetaData; data: Array<T> }>;
}) {
  const { meta, data } = await handler({ params: { ...params, page: 1 } });
  if (meta.pagination.pages > meta.pagination.page) {
    return paginateResults<T, R>({
      results: [...results, ...data],
      params: {
        ...params,
        page: meta.pagination.page + 1,
      },
      handler,
    });
  }
  return [...results, ...data];
}
