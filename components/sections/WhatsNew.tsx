"use client"

import React from "react";
import Image from "next/image";
import Title from "../items/Title";
import WhatsNewCard from "../items/WhatsNewCard";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../../utils/motions";

const WhatsNew = () => {
  const data = [
    {
      src: "/vrpano.svg",
      alt: "vrpano",
      title: "A new world",
      description:
        "we have the latest update with new world for you to try never mind",
    },
    {
      src: "/headset.svg",
      alt: "headset",
      title: "More realistic",
      description:
        "In the latest update, your eyes are narrow, making the world more realistic than ever",
    },
  ];
  return (
    <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} className="mt-[200px] flex flex-col md:flex-row">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[4]">
        <Title subhead="Whats New?" title="What's new about Metaversus?" />
        <div className="mt-12 flex flex-col sm:flex-row gap-12">
          {data.map((item, index) => (
            <WhatsNewCard key={index} {...item} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')} className="relative flex-[3] min-h-[250px] mt-6 md:mt-0 block">
        <Image
          src="/whats-new.png"
          alt="whats new"
          fill
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default WhatsNew;
