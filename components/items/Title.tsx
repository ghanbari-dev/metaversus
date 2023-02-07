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
          "mt-2 text-2xl leading-[60px] md:text-[44px] md:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-white tracking-tight" +
          (sx ? ` ${sx}` : "")
        }
      >
        {title}
      </motion.h2>
    </>
  );
};

export default Title;
