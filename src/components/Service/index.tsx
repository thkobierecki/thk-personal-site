import Image from "next/image";
import Service from "./Service";

const servicesMap = [
  {
    id: 1,
    icon: "/monitor.svg",
    altText: "Website development icon",
    title: "Website Development",
    description:
      "I specialize in creating beautiful, functional, and responsive websites that meet the unique needs of each of my clients. With an in-depth understanding of the latest web development technologies and frameworks, I am committed to delivering a website that not only looks great but also delivers a seamless user experience.",
  },
  {
    id: 2,
    icon: "/app.svg",
    altText: "App development icon",
    title: "App Development",
    description:
      "My expertise lies in developing unique and user-friendly applications that cater to the individual requirements of my clients. By prioritizing the design of user experience and employing the latest app development frameworks, I am dedicated to providing an application that surpasses my clients' expectations.",
  },
  {
    id: 3,
    icon: "/logo.svg",
    altText: "Design and Branding",
    title: "Design and Branding",
    description:
      "As a specialist in creating brand identities that are both distinctive and memorable, I ensure that my clients' businesses are accurately represented. My focus is on comprehending the distinct values and target audience of each brand, so that I can deliver a logo and branding elements that leave a long-lasting impression.",
  },
];

const Services = () => {
  return (
    <section className="lg:flex lg:items-start lg:justify-between pt-20">
      <aside className="lg:w-1/3 mb-8 lg:mb-0">
        <div className="flex-col mb-10 lg:mb-20">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary">
            Services
          </h2>
          <div className="mt-3">
            <Image src="/zigzag.svg" alt="Zigzag" width={180} height={20} />
          </div>
        </div>
      </aside>
      <div className="flex-col lg:w-2/3">
        {servicesMap.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
