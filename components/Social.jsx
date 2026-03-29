import Link from "next/link"
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/AlexMorvi"},
  {icon: <FaLinkedin />, path: "https://linkedin.com/in/alx-mrv/"},
  {icon: <FaGlobe />, path: "https://alx-mrv.vercel.app"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social