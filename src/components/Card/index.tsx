import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const Card = ({ title, image, description, link }: Props) => {
  return (
    <a href={link} className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-secondary rounded-lg shadow-md shadow-secondary opacity-75">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
        <div className="p-2">
          <h2 className="text-primary font-bold text-lg">{title}</h2>
          <p className="text-primary">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
