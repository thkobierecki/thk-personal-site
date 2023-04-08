import Link from "next/link";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="text-primary font-bold text-2xl">THK 🚀</div>
      <ul className="flex items-center space-x-4">
        <li>
          {/* <Link href="/projects">
            <div className="text-primary hover:text-purple">Projects</div>
          </Link> */}
        </li>
        <li>
          <Link href="/blog">
            <div className="text-primary hover:text-purple">Blog</div>
          </Link>
        </li>
        {/* <li>
          <Link href="/contact">
            <div className="text-primary hover:text-purple">Contact</div>
          </Link>
        </li> */}
        <li>
          <a
            href="https://twitter.com/TKobierecki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-primary hover:text-purple"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tkobierecki/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-purple"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
