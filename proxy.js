import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";

function getPreferredLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") || "";
  if (acceptLanguage.toLowerCase().startsWith("es")) {
    return "es";
  }
  return DEFAULT_LOCALE;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const isInternal =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.includes(".");

  if (isInternal) {
    return NextResponse.next();
  }

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = pathname === "/" ? getPreferredLocale(request) : DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
