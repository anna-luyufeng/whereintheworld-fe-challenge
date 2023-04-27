import { useState, useCallback } from "react";

import useInView from "./useInView";

const INITIAL_PAGE = 1;
const INITIAL_PAGE_SIZE = 8;

export default function useInfiniteLoader<T>(items: T[]) {
  const [page, setPage] = useState(INITIAL_PAGE);

  const totalPages = Math.ceil(items.length / INITIAL_PAGE_SIZE);

  const onLoadMore = useCallback(
    () => setPage((prevPage) => Math.min(totalPages, prevPage + 1)),
    [totalPages]
  );

  const { observeRef } = useInView(onLoadMore);

  return {
    items: items.slice(0, page * INITIAL_PAGE_SIZE),
    loadMoreRef: observeRef,
    hasMoreItems: page < totalPages,
  };
}
