import Image from "next/image";
import React from "react";
import IconWrapper from "./IconWrapper";

type Props = {
  title: string;
  description: string;
};

const WhatsNewCard = ({ title, description }: Props) => {
  return (
    <div>
      <IconWrapper>
        <Image src="/vrpano.svg" alt="vrpano" width={24} height={24} />
      </IconWrapper>
      <div className="mt-6 text-white text-2xl leading-[30px] font-bold">
        {title}
      </div>
      <p className="mt-4 leading-7 text-gray-400">{description}</p>
    </div>
  );
};

export default WhatsNewCard;
