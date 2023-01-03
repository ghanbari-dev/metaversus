import Image from "next/image";
import React from "react";

type Props = { src: string; alt: string; title: string; description: string };

const InsightCard = ({ src, alt, title, description }: Props) => {
  return (
    <div className="flex justify-between items-center gap-16">
      <div className="w-[270px] h-[250px] relative rounded-[32px] overflow-hidden flex-shrink-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[42px] leading-[52px] tracking-tight text-white">
          {title}
        </p>
        <p className="text-xl leading-10 tracking-wide text-gray-400">
          {description}
        </p>
      </div>
      <div className="w-[100px] h-[100px] border-2 rounded-full flex-shrink-0 flex justify-center items-center">
        <Image src="/arrow.svg" alt="arrow" width={27} height={33} />
      </div>
    </div>
  );
};

export default InsightCard;
