import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/AlexMorvi"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/alexander-morales-a77924275/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/alx.mrv/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social