"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { showVariants } from "../../utils/motions";


const Header = () => {

  
  return (
    <motion.header
      variants={showVariants}
      initial="hidden"
      whileInView="show"
      className="mt-9 mx-auto flex justify-between"
    >
      <Image src={"/search.svg"} alt="search" width={20} height={20} />
      <p className="text-white font-extrabold text-2xl leading-[30px]">
        METAVERSUS
      </p>
      <Image src={"/menu.svg"} alt="menu" width={20} height={20} />
    </motion.header>
  );
};

export default Header;
