import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="default-layout">
        <header className="header">
          <Header />
        </header>
        <main className="main mt-2">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
