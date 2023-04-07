import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="lg:col-start-2 lg:col-end-11 md:col-start-2 md:col-end-5 col-span-12 lg:flex lg:items-center lg:justify-between pt-20">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          👋 Hi, I’m Tom
        </h1>
        <p className="text-md md:text-xl lg:text-xl text-primary mb-3">
          Welcome to my portfolio website! I'm a full stack developer with a
          passion for creating beautiful and functional websites and
          applications.
        </p>
        <p className="text-md md:text-xl lg:text-xl text-primary mb-8">
        As a <span className="text-purple">digital nomad</span>{" "}
          and <span className="text-purple">indie hacker</span>, I also love
          building my own products and exploring new technologies.
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Image
          src="/tom-ilustration.svg"
          alt="Tom Ilustration"
          width={500}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
