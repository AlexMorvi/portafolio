"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = ({ lang = "en", labels = {} }) => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {sections.map((section, index)=>{
                const href = `/${lang}${section.href}`;
                return (
                    <Link 
                    href={href} 
                    key= {index}
                    className={`${
                        href === pathname && "text-accent border-b-2 border-accent" 
                    } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {labels[section.key] || section.key}
                    </Link>
        );
    })}
    </nav>)
}

export default Nav