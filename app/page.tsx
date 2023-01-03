import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Worlds from "../components/Worlds";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />

      <Hero />

      <About />

      <Worlds />
    </div>
  );
};

export default page;
