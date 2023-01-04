import Image from "next/image";
import React from "react";

type Props = {};

const Founder = (props: Props) => {
  return (
    <div className="mt-[200px] h-[610px] flex gap-8">
      <div
        className="flex-[1] rounded-[32px] border border-gray-500 flex flex-col justify-end p-7 text-white tracking-tight"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <p className="text-[32px] leading-[40px] font-bold">Samantha</p>
        <p className="mt-2 text-lg leading-[22px]">Founder Metaverus</p>
        <p className="mt-6 text-2xl leading-[46px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </div>
      <div className="flex-[2] relative ">
        <Image
          src="/planet-09.png"
          alt="planet-09"
          fill
          className="object-cover rounded-[40px]"
        />
        <Image
          src="/stamp.png"
          alt="stamp"
          width={155}
          height={155}
          className="absolute top-12 -translate-x-1/2 object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Founder;
