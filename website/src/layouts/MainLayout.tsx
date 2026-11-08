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
        <span>Resurse de învățare</span>
      </header>
      {children}
      <footer className="site-footer">
        Materiale educaționale pentru Bacalaureatul la informatică.
      </footer>
    </main>
  );
}
