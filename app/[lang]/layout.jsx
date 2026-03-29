import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { getDictionary, isValidLocale, SUPPORTED_LOCALES } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: "/LogoM.svg",
      shortcut: "/LogoM.svg",
      apple: "/LogoM.svg",
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} navLabels={dict.nav} />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
