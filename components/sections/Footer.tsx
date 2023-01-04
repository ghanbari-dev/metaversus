"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motions";


const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="mt-[200px]"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[64px] leading-[80px] tracking-tight text-white">
          Enter the Metaverse
        </h2>
        <div className="bg-[#25618B] flex items-center px-5 py-8 rounded-full flex-shrink-0">
          <Image src="/headset.svg" alt="headset" width={24} height={24} />
          <p className="ml-3 leading-5 tracking-wide text-white">
            ENTER METAVERSE
          </p>
        </div>
      </div>
      <div className="bg-white mt-20 h-[2px] opacity-10" />
      <div className="my-[50px] flex items-center justify-between">
        <div className="text-white font-extrabold text-2xl leading-[30px]">
          METAVERUS
        </div>
        <p className="text-white opacity-80 text-sm tracking-wide">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className="flex items-center gap-7">
          <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
          <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
          <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
