"use client"

import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motions";

type Props = {
  subhead: string;
  title: string;
  sx?: string;
};

const Title = ({ subhead, title, sx }: Props) => {
  return (
    <>
      <motion.div variants={textContainer} className="head-sub">
        {subhead}
      </motion.div>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={
          "mt-2 text-[64px] font-bold leading-[80px] text-white tracking-tight" +
          (sx ? ` ${sx}` : "")
        }
      >
        {title}
      </motion.h2>
    </>
  );
};

export default Title;
