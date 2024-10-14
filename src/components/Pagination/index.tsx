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
  const lastPage = Math.ceil(maxItems / perPage);

  const pageNumbers = Array.from({ length: 7 }, (_, i) => page - 3 + i).filter(
    (p) => p > 0 && p <= lastPage
  );

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowButton}
        onClick={() => goToPage(1)}
        disabled={page === 1}
      >
        -
      </button>
      <button
        className={styles.arrowButton}
        disabled={page === 1}
        onClick={previousPage}
      >
        &lt;
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => goToPage(number)}
          className={`${styles.paginationButton} ${
            number === page ? styles.currentButton : ""
          } ${number === page ? styles.active : ""}`}
        >
          {number}
        </button>
      ))}

      <button
        className={styles.arrowButton}
        disabled={page === lastPage}
        onClick={nextPage}
      >
        &gt;
      </button>
      <button
        className={styles.arrowButton}
        onClick={() => goToPage(lastPage)}
        disabled={page === lastPage}
      >
        +
      </button>
    </div>
  );
};
