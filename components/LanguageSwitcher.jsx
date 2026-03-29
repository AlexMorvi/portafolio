"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = ["en", "es"];

function buildLocalizedPath(pathname, nextLocale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (LOCALES.includes(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}${pathname}`;
}

const LanguageSwitcher = ({ currentLocale }) => {
  const pathname = usePathname() || "/";

  return (
    <div className="inline-flex items-center rounded-full border border-accent/40 bg-primary/70 p-1">
      {LOCALES.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={buildLocalizedPath(pathname, locale)}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              active
                ? "bg-accent text-primary"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
