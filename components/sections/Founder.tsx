"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motions";

const Founder = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[200px] h-[610px] flex flex-col gap-8 md:flex-row"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[1] rounded-[32px] border border-gray-500 flex flex-col justify-end p-7 text-white tracking-tight"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <p className="text-[32px] leading-[40px] font-bold">Samantha</p>
        <p className="mt-2 text-lg leading-[22px]">Founder Metaverus</p>
        <p className="mt-6 text-lg leading-[30px] md:text-xl md:leading-[40px] lg:text-2xl lg:leading-[46px]">
          “With the development of today&apos;s technology, metaverse is very useful
          for today&apos;s work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[2] relative inline-block min-h-[200px]"
      >
        <Image
          src="/planet-09.png"
          alt="planet-09"
          fill
          className="object-cover rounded-[40px]"
        />
        <motion.div variants={zoomIn(0.4, 1)}>
          <Image
            src="/stamp.png"
            alt="stamp"
            width={155}
            height={155}
            className="absolute -right-4 -top-16 md:top-12 md:left-0 md:-translate-x-1/2 object-contain z-10"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Founder;
