import { useEffect, useMemo, useRef, useState, useId } from "react";
import { Menu, X, Download } from "lucide-react";
import {
  HEADER_BAR,
  HEADER_BRAND_BUTTON,
  HEADER_DESKTOP_NAV,
  HEADER_DESKTOP_LINK_BASE,
  HEADER_DESKTOP_LINK_ACTIVE,
  HEADER_DESKTOP_LINK_INACTIVE,
  HEADER_MOBILE_TOGGLE,
  HEADER_MOBILE_PANEL,
  HEADER_MOBILE_ITEM,
  HEADER_MOBILE_COLLAPSE,
  HEADER_MOBILE_LINK_ACTIVE,
  HEADER_MOBILE_LINK_INACTIVE,
  BTN_SECONDARY, // 👈 changed from BTN_PRIMARY
} from "../styles/uiStyles";
import { profile } from "../data/profile";

export default function Header({
  brand = "Joemarie Ronday", // 👈 updated default
  pages = [],
  active,
  onSelect,
}) {
  const [open, setOpen] = useState(false);
  const mdUp = useMediaQuery("(min-width: 768px)");
  const panelRef = useRef(null);
  const navId = useId();

  // Close menu when switching from mobile to desktop view
  useEffect(() => {
    if (mdUp && open) setOpen(false);
  }, [mdUp, open]);

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.dataset.scrollLock = "true";
      body.style.overflow = "hidden";
    } else if (body.dataset.scrollLock) {
      delete body.dataset.scrollLock;
      body.style.overflow = "";
    }
    return () => {
      if (document.body.dataset.scrollLock) {
        delete document.body.dataset.scrollLock;
        document.body.style.overflow = "";
      }
    };
  }, [open]);

  const { first: brandFirst, rest: brandRest } = useMemo(
    () => splitBrand(brand),
    [brand],
  );

  return (
    <header className={HEADER_BAR}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Brand
            first={brandFirst}
            rest={brandRest}
            onClick={() => {
              onSelect?.("about");
              setOpen(false);
            }}
          />

          <div className="flex items-center gap-3">
            <DesktopNav pages={pages} active={active} onSelect={onSelect} />

            {/* 👇 Desktop-only Resume button */}
            <a
              href={profile.resumeUrl}
              download
              className={`${BTN_SECONDARY} hidden md:inline-flex`} // 👈 sm → md
              aria-label="Download resume PDF"
            >
              <Download size={14} className="mr-1.5" />
              Resume
            </a>

            <MobileToggle
              open={open}
              onToggle={() => setOpen((o) => !o)}
              controlsId={`mobile-nav-${navId}`}
            />
          </div>
        </div>

        <MobileNav
          id={`mobile-nav-${navId}`}
          ref={panelRef}
          open={open}
          pages={pages}
          active={active}
          resumeUrl={profile.resumeUrl} // 👈 pass it in
          onSelect={(id) => {
            onSelect?.(id);
            setOpen(false);
          }}
        />
      </div>
    </header>
  );
}

/** Utility: Split brand name into two parts for styling */
function splitBrand(str) {
  const parts = String(str).trim().split(/\s+/);
  return { first: parts[0] ?? "", rest: parts.slice(1).join(" ") };
}

/** Utility: Join class names conditionally */
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Brand button component */
function Brand({ first, rest, onClick }) {
  return (
    <button
      type="button"
      className={HEADER_BRAND_BUTTON}
      onClick={onClick}
      aria-label="Go to About"
    >
      {first} {rest && <span className="font-extrabold">{rest}</span>}
    </button>
  );
}

/** Desktop navigation (visible only on md+) */
function DesktopNav({ pages, active, onSelect }) {
  return (
    <nav className={HEADER_DESKTOP_NAV} aria-label="Primary">
      {pages.map((p) => (
        <button
          type="button"
          key={p.id}
          onClick={() => onSelect?.(p.id)}
          aria-current={active === p.id ? "page" : undefined}
          className={cx(
            HEADER_DESKTOP_LINK_BASE,
            active === p.id
              ? HEADER_DESKTOP_LINK_ACTIVE
              : HEADER_DESKTOP_LINK_INACTIVE,
          )}
        >
          <div className="flex items-center gap-2">
            {p.icon}
            <span>{p.label}</span>
          </div>
        </button>
      ))}
    </nav>
  );
}

/** Mobile menu toggle (hamburger / close icon) */
function MobileToggle({ open, onToggle, controlsId }) {
  return (
    <button
      type="button"
      className={HEADER_MOBILE_TOGGLE}
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={open}
      aria-controls={controlsId}
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}

/** Mobile navigation panel */
const MobileNav = Object.assign(
  (props, ref) => {
    const { open, pages, active, onSelect, id, resumeUrl, ...rest } = props;
    return (
      <div
        id={id}
        ref={ref}
        {...rest}
        className={cx(
          HEADER_MOBILE_COLLAPSE,
          open
            ? "max-h-[90vh] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
        aria-hidden={!open}
      >
        <div className={`${HEADER_MOBILE_PANEL} overscroll-contain`}>
          <ul className="py-2" role="menu" aria-label="Mobile navigation">
            {pages.map((p) => (
              <li key={p.id} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => onSelect?.(p.id)}
                  aria-current={active === p.id ? "page" : undefined}
                  disabled={!open}
                  tabIndex={open ? 0 : -1}
                  className={cx(
                    HEADER_MOBILE_ITEM,
                    active === p.id
                      ? HEADER_MOBILE_LINK_ACTIVE
                      : HEADER_MOBILE_LINK_INACTIVE,
                  )}
                >
                  <div className="flex items-center gap-3">
                    {p.icon}
                    <span>{p.label}</span>
                  </div>

                  {active === p.id && (
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={resumeUrl}
            download
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-center gap-2 mx-3 mb-3 mt-1 px-4 py-2.5 rounded-xl bg-sky-300 text-black font-medium hover:bg-sky-400 transition"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    );
  },
  { displayName: "MobileNav" },
);

/** Custom hook: respond to viewport media queries */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
    // Fallback for old browsers
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, [query]);

  return matches;
}
