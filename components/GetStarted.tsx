import Image from "next/image";
import React from "react";
import IconWrapper from "./IconWrapper";

type Props = {};

const GetStarted = (props: Props) => {
  const data = [
    "Find a world that suits you and you want to enter",
    "Enter the world by reading basmalah to be safe",
    "No need to beat around the bush, just stay on the gas and have fun",
  ];

  return (
    <div className="mt-[200px]">
      <div className="flex">
        <div className="relative flex-[4]">
          <Image
            src="/get-started.png"
            alt="get started"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-[3]">
          <div className="head-sub">How Metaverus Works</div>
          <h2 className="mt-2 text-[64px] font-bold leading-[77px] text-white">
            Get started with just a few clicks
          </h2>
          {data.map((d, index) => (
            <div key={index} className="mt-6 flex gap-7">
              <IconWrapper>
                <p className="text-white text-xl font-bold">
                  {"0" + (index + 1)}
                </p>
              </IconWrapper>
              <p className="text-lg leading-[32px] text-gray-400">{d}</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GetStarted;
