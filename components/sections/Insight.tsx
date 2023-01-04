"use client";

import React from "react";
import InsightCard from "../items/InsightCard";
import Title from "../items/Title";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motions";

const Insight = () => {
  const data = [
    {
      src: "/planet-06.png",
      alt: "planet-06",
      title: "The launch of the Metaverse makes Elon musk ketar-ketir",
      description:
        "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    },
    {
      src: "/planet-07.png",
      alt: "planet-07",
      title: "7 tips to easily master the madness of the Metaverse",
      description:
        "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    },
    {
      src: "/planet-08.png",
      alt: "planet-08",
      title: "With one platform you can explore the whole world virtually",
      description:
        "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[200px] flex flex-col items-center"
    >
      <Title
        subhead="Insight"
        title="Insight about metaverse"
        sx="text-center"
      />
      <div className="mt-12 flex flex-col w-full gap-7">
        {data.map((item, index) => (
          <InsightCard key={index} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Insight;
