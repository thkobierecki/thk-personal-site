// import Image from 'next/image'
import HeroSection from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { Rubik } from "next/font/google";
import styles from "./page.module.css";

const inter = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 md:grid-cols-6">
      <div className="col-span-1"></div>
      <div className="col-span-10 md:col-span-4">
        <Navigation />
        <HeroSection/>
      </div>
      <div className="col-span-1"></div>
    </main>
  );
}
