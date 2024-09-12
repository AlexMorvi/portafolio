import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image"; // Add this line

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className = "py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/" className="flex justify-end">
        <Image 
            src="/LogoM.svg" 
            alt="Logo" 
            width={48} 
            height={48} 
            className="invert"
          />
          <span className="text-accent">..</span>
        </Link>
        {/*desk nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8  ">
          <Nav />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
        
        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>


      </div>
    </header>
  );
};

export default Header;