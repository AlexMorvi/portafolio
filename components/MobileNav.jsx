"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

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
        <div className="mt-40 mb-40 text-center text-2xl">

          {/*logo*/}
        <Link href="/" className="flex justify-center" onClick={handleLinkClick}>
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