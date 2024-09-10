"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about me",
    href: "/about",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // control menu state
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              Alx<span className="text-accent">...</span>
            </h1>
          </Link>
        </div>
        {/*nav links*/}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`${
                link.href === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick} // call the function to close the menu
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;