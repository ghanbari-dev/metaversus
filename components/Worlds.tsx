"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Worlds = (props: Props) => {
  const data = [
    { src: "/planet-01.png", alt: "planet-01", title: "The Hogwarts" },
    { src: "/planet-02.png", alt: "planet-02", title: "The Upside Down" },
    { src: "/planet-03.png", alt: "planet-03", title: "Kadirojo Permai" },
    { src: "/planet-04.png", alt: "planet-04", title: "Paradise Island" },
    { src: "/planet-05.png", alt: "planet-05", title: "Hawkins Labs" },
  ];
  const [selected, setSelected] = useState<number>(1);
  return (
    <div className="mt-52 flex flex-col items-center text-gray-400">
      <div className="head-sub">The World</div>
      <h2 className="mt-2 text-white text-[64px] leading-[81px] font-bold text-center tracking-tight">
        Choose the world you want to explore
      </h2>
      <div className="mt-[50] w-full h-[563px] flex gap-7">
        {data.map((item, index) => (
          <div
            className={
              "relative h-full w-full rounded-3xl overflow-hidden flex items-end justify-center" +
              (index == selected ? " flex-[3]" : " flex-[1]")
            }
            onClick={() => setSelected(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover z-10"
            />
            {index == selected ? (
              <div className="z-20 w-full flex flex-col items-start pl-8">
                <div
                  className="p-5 rounded-full relative overflow-hidden"
                  style={{ backdropFilter: "blur(24px)" }}
                >
                  <Image
                    src="/headset.svg"
                    alt="headset"
                    width={24}
                    height={18}
                  />
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
                {item.title}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worlds;
