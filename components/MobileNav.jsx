"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const sections = [
  {
    key: "home",
    href: "",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

const MobileNav = ({ lang = "en", labels = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuTitle = lang === "es" ? "Menu de navegacion" : "Navigation menu";

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">{menuTitle}</SheetTitle>
        {/*logo*/}
        <div className="mb-20 mt-20 text-center text-2xl">

          {/*logo*/}
        <Link href={`/${lang}`} className="flex justify-center" onClick={handleLinkClick}>
        <Image 
            src="/LogoM.svg" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="invert"
          />
          <span className="text-accent text-2xl ml-1 relative top-[2px]">..</span>
        </Link>
        </div>
        <div className="mb-10 flex justify-center">
          <LanguageSwitcher currentLocale={lang} />
        </div>
        {/*nav links*/}
        <nav className="flex flex-col justify-center items-center gap-8">
          {sections.map((section, index) => {
            const href = `/${lang}${section.href}`;
            return (
              <Link
              href={href}
              key={index}
              className={`${
                href === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick}
            >
              {labels[section.key] || section.key}
            </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;