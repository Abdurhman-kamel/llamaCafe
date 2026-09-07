import "./globals.css";

/**
 * Phase 03 — Root Layout (English-only, no i18n yet).
 *
 * `lang`/`dir` are hardcoded for now. Locale segments (`app/[locale]/...`)
 * and dynamic lang/dir come in the i18n phase — this layout intentionally
 * does not anticipate that yet, per the current phase's scope.
 *
 * No providers (LanguageProvider, MenuNavigationProvider, SmoothScroll) are
 * mounted here — those are Client Components introduced in later phases and
 * belong in `page.jsx`, not in this static Server layout.
 */

export const metadata = {
  title: "Llama Café",
  description: "Llama Café — specialty coffee.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="font-sans">
      <body>{children}</body>
    </html>
  );
}