"use client";

import React from "react";
import Image from "next/image";
import IconWrapper from "../items/IconWrapper";
import Title from "../items/Title";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../../utils/motions";

const GetStarted = () => {
  const data = [
    "Find a world that suits you and you want to enter",
    "Enter the world by reading basmalah to be safe",
    "No need to beat around the bush, just stay on the gas and have fun",
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[200px] flex"
    >
      <motion.div
        variants={planetVariants("left")}
        className="relative flex-[4]"
      >
        <Image
          src="/get-started.png"
          alt="get started"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[3]"
      >
        <Title
          subhead="How Metaverus Works"
          title="Get started with just a few clicks"
        />
        {data.map((item, index) => (
          <div key={index} className="mt-6 flex gap-7">
            <IconWrapper>
              <p className="text-white text-xl font-bold">
                {"0" + (index + 1)}
              </p>
            </IconWrapper>
            <p className="text-lg leading-[32px] text-gray-400">{item}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GetStarted;
