import { CARD, LAYOUT_MAIN, LAYOUT_FOOTER } from "../styles/uiStyles";

export default function Layout({ left, right, footer }) {
  return (
    <div>
      <main className={LAYOUT_MAIN}>
        {/* Left column — keep the card look for the "profile card" feel */}
        <Card className="p-0">{left}</Card>

        {/* Right column — no card on desktop, card on mobile for edge spacing */}
        <section className="p-0 md:p-0 rounded-2xl md:rounded-none md:border-0 md:bg-transparent border border-white/10 bg-slate-900/70 backdrop-blur-sm">
          {right}
        </section>
      </main>

      <footer className={LAYOUT_FOOTER}>
        {footer} © {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <section className={[CARD, "p-5 md:p-8", className].join(" ")}>
      {children}
    </section>
  );
}
