import en from "@/lib/locales/en";
import es from "@/lib/locales/es";

export const SUPPORTED_LOCALES = ["en", "es"];
export const DEFAULT_LOCALE = "en";

const dictionaries = {
  en,
  es,
};

export function isValidLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}
