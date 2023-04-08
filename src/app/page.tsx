// import Image from 'next/image'
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Services from "@/components/Service";
import { Rubik } from "next/font/google";
import styles from "./page.module.css";

const inter = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-2 md:grid-cols-6">
      <div className="col-span-1"></div>
      <div className="col-span-10 md:col-span-4">
        <Navigation />
        <HeroSection/>
        <Projects />
        <Services />
        <Blogs />
      </div>
      <div className="col-span-1"></div>
      <Footer />
    </main>
  );
}
