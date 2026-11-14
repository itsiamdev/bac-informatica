import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#">
          BAC Informatică
        </a>
        <nav className="site-nav" aria-label="Navigare principală">
          <a href="#">Acasă</a>
          <a href="#mate-info">Mate-Info</a>
          <a href="#stiinte-ale-naturii">Științe ale naturii</a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        Materiale educaționale pentru Bacalaureatul la informatică.
      </footer>
    </main>
  );
}
