"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../utils/motions";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-44"
    >
      <div className="text-white text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[144px] leading-[110%] font-bold tracking-tight uppercase flex items-center flex-col">
        <motion.h1 variants={textVariant(1.1)}>METAVERSUS</motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex items-center w-[315.36px] sm:w-[504.56px] md:w-[630.7px] lg:w-[756.84px] xl:w-[908.22px] z-20"
        >
          <h1>ma</h1>
          <div className="flex-grow h-[30px] sm:h-[55px] md:h-[70px] lg:h-[85px] xl:h-[108px] border-[10px] sm:border-[13px] md:border-[16px] lg:border-[19px]  xl:border-[22px] rounded-r-[50px] border-white mx-2" />
          <h1>ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <div className="relative -mt-14 h-[488px] w-screen z-10 rounded-tl-[140px] rounded-bl-[42px] overflow-hidden">
          <Image src="/cover.png" alt="hero" fill className="object-cover" />
        </div>
        <div className="flex justify-end">
          <Link
            href="#"
            className="relative -mt-[77px] h-[155px] w-[155px] z-20 overflow-hidden"
          >
            <Image src="/stamp.png" alt="hero" fill />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
