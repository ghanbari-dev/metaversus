"use client";

import React, { useState } from "react";
import Title from "../items/Title";
import WorldsCard from "../items/WorldsCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motions";

const Worlds = () => {
  const data = [
    { src: "/planet-01.png", alt: "planet-01", title: "The Hogwarts" },
    { src: "/planet-02.png", alt: "planet-02", title: "The Upside Down" },
    { src: "/planet-03.png", alt: "planet-03", title: "Kadirojo Permai" },
    { src: "/planet-04.png", alt: "planet-04", title: "Paradise Island" },
    { src: "/planet-05.png", alt: "planet-05", title: "Hawkins Labs" },
  ];
  const [selected, setSelected] = useState<number>(1);
  return (
    <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className="mt-52 flex flex-col items-center text-gray-400">
      <Title
        subhead="The World"
        title="Choose the world you want to explore"
        sx="text-center"
      />
      <div className="mt-[50px] w-full h-[563px] flex flex-col md:flex-row gap-7">
        {data.map((item, index) => (
          <WorldsCard
            key={index}
            index={index}
            selected={selected}
            setSelected={setSelected}
            {...item}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Worlds;
