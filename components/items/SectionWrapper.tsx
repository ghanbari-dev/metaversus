import React, { ReactNode } from "react";
import LightEffect from "./LightEffect";

type Props = {
  children: ReactNode;
  index: number;
  count: number;
  align: "left" | "right";
};

const SectionWrapper = ({ children, align, index, count }: Props) => {
  const pos = [];
  for (let i = 0; i < count; i++) {
    pos.push(
      `top-[${Math.floor(i * (100 / (count - 1)))}%] ${align}-[${Math.floor(
        i * (100 / (count - 1))
      )}%]`
    );
  }
  return (
    <div className="relative">
      {pos.map((p, i) =>
        align == "left" ? (
          <LightEffect key={i} type={index + i} sx={p} />
        ) : (
          <LightEffect key={i} type={index + i} sx={p} />
        )
      )}
      {children}
    </div>
  );
};

export default SectionWrapper;
