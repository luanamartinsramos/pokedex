import styles from "./styles.module.scss";

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number;
  goToPage: (page: number) => void;
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
  goToPage,
}: Props) => {
  const lastPage = Math.ceil(maxItems! / perPage);
  const pageNumbers = Array.from({ length: 7 }, (_, i) => page - 3 + i).filter(
    (p) => p > 0 && p <= lastPage
  );

  return (
    <div className={styles.pagination}>
      <button onClick={() => goToPage(1)} disabled={page === 1}>
        First
      </button>
      <button disabled={page === 1} onClick={previousPage}>
        &lt;
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={`${pageNumber === page ? styles.active : ""}`}
        >
          {pageNumber}
        </button>
      ))}

      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
      <button onClick={() => goToPage(lastPage)} disabled={page === lastPage}>
        Last
      </button>
    </div>
  );
};
