import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  sx?: string;
};

const People = ({ src, alt, sx }: Props) => {
  return (
    <div className={"absolute" + (sx ? ` ${sx}` : "")}>
      <div className="relative w-[73px] h-[73px]">
        <div className="absolute h-full w-full flex justify-center items-center">
          <Image src={src} alt={alt} width={60} height={60} className="z-40" />
        </div>
        <div className="absolute h-full w-full flex justify-center items-center">
          <Image
            src={src}
            alt={alt}
            width={70}
            height={70}
            className="blur-xl z-30"
          />
        </div>
        <div
          className="w-full h-full backdrop-blur-[6px] bg-[rgba(255,255,255,0.08)] rounded-full z-20"
          style={{ boxShadow: "0px 40px 80px rgba(0,0,0,0.25)" }}
        />
      </div>
    </div>
  );
};

export default People;
