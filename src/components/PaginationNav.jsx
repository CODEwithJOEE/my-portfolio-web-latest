import { BTN_PILL, BTN_PILL_ACTIVE } from "../styles/uiStyles";

export default function PaginationNav({
  page,
  totalPages,
  onPageChange,
  ariaLabel = "Pagination",
}) {
  const go = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  };

  return (
    <nav className="inline-flex items-center gap-2" aria-label={ariaLabel}>
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className={BTN_PILL}
      >
        Prev
      </button>

      <div className="inline-flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => go(n)}
            className={n === page ? BTN_PILL_ACTIVE : BTN_PILL}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className={BTN_PILL}
      >
        Next
      </button>
    </nav>
  );
}
