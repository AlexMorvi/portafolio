"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index)=>{
                return (
                    <Link 
                    href={link.href} 
                    key= {index}
                    className={`${
                        link.href === pathname && "text-accent border-b-2 border-accent" 
                    } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
        );
    })}
    </nav>)
}

export default Nav