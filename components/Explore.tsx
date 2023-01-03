import Image from "next/image";
import React from "react";
import People from "./People";
import Title from "./Title";

import map from "../public/map.png";
type Props = {};

const Explore = (props: Props) => {
  const data = [
    { srs: "/people-01.png", alt: "people-01", sx: "top-[10%] left-[10%]" },
    { srs: "/people-02.png", alt: "people-02", sx: "bottom-[20%] right-[10%]" },
    { srs: "/people-03.png", alt: "people-03", sx: "top-[30%] left-[45%]" },
  ];
  return (
    <div className="mt-[200px] flex flex-col items-center">
      <Title
        subhead="People on the World"
        title="Track friends around you and invite them to play together in the same world"
        sx="text-center"
      />
      <div className="mt-16 relative w-full">
        <Image src={map} alt="map" className="object-contain" />
        {data.map((item,index) => (
          <People key={index} src={item.srs} alt={item.alt} sx={item.sx} />
        ))}

        {/* TODO: add cards to map */}
      </div>
    </div>
  );
};

export default Explore;
