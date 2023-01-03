import React from "react";

type Props = {
  subhead: string;
  title: string;
  sx?: string;
};

const Title = ({ subhead, title, sx }: Props) => {
  return (
    <>
      <div className="head-sub">{subhead}</div>
      <h2
        className={
          "mt-2 text-[64px] font-bold leading-[80px] text-white tracking-tight" +
          (sx ? ` ${sx}` : "")
        }
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
