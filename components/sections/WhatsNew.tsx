import Image from "next/image";
import React from "react";
import Title from "../items/Title";
import WhatsNewCard from "../items/WhatsNewCard";

const WhatsNew = () => {
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
            <WhatsNewCard key={index} {...item} />
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
