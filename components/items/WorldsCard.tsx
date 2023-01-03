import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  index: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  src: string;
  alt: string;
  title: string;
};

const WorldsCard = ({
  index,
  selected,
  setSelected,
  src,
  alt,
  title,
}: Props) => {
  return (
    <div
      className={
        "relative h-full w-full rounded-3xl overflow-hidden flex items-end justify-center" +
        (index == selected ? " flex-[3]" : " flex-[1]")
      }
      onClick={() => setSelected(index)}
    >
      <Image src={src} alt={alt} fill className="object-cover z-10" />
      {index == selected ? (
        <div className="z-20 w-full flex flex-col items-start pl-8">
          <div className="p-5 rounded-full relative overflow-hidden backdrop-blur-xl">
            <Image src="/headset.svg" alt="headset" width={24} height={18} />
          </div>
          <p className="mt-4 leading-5 text-white tracking-[0.005em]">
            ENTER METAVERSE
          </p>
          <p className="mt-6 text-white font-bold text-[32px] leading-[40px] mb-8">
            The Upside Down
          </p>
        </div>
      ) : (
        <h3
          className="text-white font-bold text-[32px] whitespace-nowrap z-20 -rotate-90 translate-x-1/2"
          style={{ transformOrigin: "0% 50%" }}
        >
          {title}
        </h3>
      )}
    </div>
  );
};

export default WorldsCard;
