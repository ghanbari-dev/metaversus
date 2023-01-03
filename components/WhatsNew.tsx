import Image from "next/image";
import React from "react";
import IconWrapper from "./IconWrapper";
import Title from "./Title";

type Props = {};

const WhatsNew = (props: Props) => {
  const data = [
    {
      src: "/vrpano.svg",
      alt: "vrpano",
      title: "A new world",
      description:
        "we have the latest update with new world for you to try never mind",
    },
    {
      src: "/headset.svg",
      alt: "headset",
      title: "More realistic",
      description:
        "In the latest update, your eyes are narrow, making the world more realistic than ever",
    },
  ];
  return (
    <div className="mt-[200px] flex">
      <div className="flex-[4]">
        <Title subhead="Whats New?" title="What's new about Metaversus?" />
        <div className="mt-12 flex gap-12">
          {data.map((item, index) => (
            <div key={index}>
              <IconWrapper>
                <Image src="/vrpano.svg" alt="vrpano" width={24} height={24} />
              </IconWrapper>
              <div className="mt-6 text-white text-2xl leading-[30px] font-bold">
                {item.title}
              </div>
              <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-[3]">
        <Image
          src="/whats-new.png"
          alt="whats new"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WhatsNew;
