import React from "react";

type Props = { type: number; sx: string };

const LightEffect = ({ type, sx }: Props) => {
  const colors = [
    "bg-[#CFECFD]",
    "bg-[#2565E1]",
    "bg-[#7AEBFB]",
    "bg-[#D225E1]",
    "bg-[#2D4898BF]",
    "bg-[#259DE1]",
    "bg-[#4298E83B]",
    "bg-[#65C4FA]",
    "bg-[#7D7AFB]",
    "bg-[#8E25E1]",
    "bg-[#9542E859]",
  ];
  return (
    <div className={"absolute w-96 h-96 " + sx}>
      <div className={"blur-3xl w-full h-full opacity-30 " + colors[type]} />
    </div>
  );
};

export default LightEffect;
