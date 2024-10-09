import { useState } from "react";

export function usePagination() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const previousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const goToPage = (pageNumber: number) => setPage(pageNumber);
  const backToHome = () => setPage(1);

  return { page, nextPage, previousPage, goToPage, backToHome };
}
