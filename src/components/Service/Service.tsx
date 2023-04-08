import React from "react";
import Image from "next/image";

type ServiceProps = {
  service: {
    title: string;
    description: string;
    icon: string;
    altText: string;
  }
};

const Service = ({
  service
}: ServiceProps) => {
  return (
    <div className="flex items-center bg-secondary rounded-lg p-4 mb-5">
      <div className="hidden lg:block mr-4">
        <Image
          src={service.icon}
          alt={service.altText}
          width={180}
          height={140}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg md:text-lg font-bold text-primary mb-1">
          {service.title}
        </h3>
        <p className="text-primary text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
