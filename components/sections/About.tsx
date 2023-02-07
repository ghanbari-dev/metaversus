"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textContainer } from "../../utils/motions";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer(0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-56 flex flex-col items-center text-gray-400"
    >
      <motion.div variants={textContainer} className="head-sub">
        About Metaverus
      </motion.div>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-2 text-center text-lg leading-[32px] md:text-2xl md:leading-[42px] lg:text-[32px] lg:leading-[57.6px]"
      >
        <span className="text-white font-bold">Metaverse</span> is a new thing
        in the future, where you can enjoy the virtual world by feeling like
        it's really real, you can feel what you feel in this metaverse world,
        because this is really the
        <span className="text-white font-bold">madness of the metaverse</span>
        of today, using only <span className="text-white font-bold">VR</span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's
        <span className="text-white font-bold">explore</span>
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Link href="#" className="mt-7">
          <Image
            src="/arrow-down.svg"
            alt="arrow-down"
            width={18}
            height={28}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default About;
