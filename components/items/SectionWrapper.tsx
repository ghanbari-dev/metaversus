import React, { ReactNode } from "react";
import LightEffect from "./LightEffect";

type Props = {
  children: ReactNode;
  index: number;
  align: "left" | "right";
};

const SectionWrapper = ({ children, align, index }: Props) => {
  const posl = [
    "top-[0%] left-[0%]",
    "top-[25%] left-[25%]",
    "top-[50%] left-[50%]",
    "top-[75%] left-[75%]",
    "top-[100%] left-[100%]",
  ];

  const posr = [
    "top-[0%] right-[0%]",
    "top-[25%] right-[25%]",
    "top-[50%] right-[50%]",
    "top-[75%] right-[75%]",
    "top-[100%] right-[100%]",
  ];
  return (
    <div className="relative w-full">
      {align == "left"
        ? posl.map((p,i) => <LightEffect key={i} type={index + i} sx={p} />)
        : posr.map((p,i) => <LightEffect key={i} type={index + i} sx={p} />)}
      {children}
    </div>
  );
};

export default SectionWrapper;
