import Link from 'next/link';
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col py-10 bg-secondary col-span-12">
      <p className="text-primary mb-4">Made with  ❤️ by THK 🚀</p>
      <div className="flex space-x-4">
        <Link href="https://twitter.com/TKobierecki">
          <div aria-label="Twitter" className="text-primary hover:text-purple">
            <FiTwitter />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/tkobierecki/">
          <div aria-label="LinkedIn" className="text-primary hover:text-purple">
            <FiLinkedin />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
