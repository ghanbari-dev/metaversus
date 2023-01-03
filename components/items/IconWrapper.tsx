import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const IconWrapper = ({ children }: Props) => {
  return (
    <div className="w-[70px] h-[70px] backdrop-blur-xl bg-[rgba(255,255,255,0.1)] rounded-3xl flex justify-center items-center flex-shrink-0">
      {children}
    </div>
  );
};

export default IconWrapper;
