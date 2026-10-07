import { ACTION_PILL } from "../styles/uiStyles.js";

export default function ActionPill({
  as = "a",
  href,
  onClick,
  Icon,
  children,
  "aria-label": ariaLabel,
}) {
  if (as === "button") {
    return (
      <button
        onClick={onClick}
        className={ACTION_PILL}
        aria-label={ariaLabel}
        type="button"
      >
        {Icon ? <Icon size={16} /> : null}
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={ACTION_PILL}
      aria-label={ariaLabel}
    >
      {Icon ? <Icon size={16} /> : null}
      {children}
    </a>
  );
}
