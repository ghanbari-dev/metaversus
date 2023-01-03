import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />

      <Hero />

      <About />
    </div>
  );
};

export default page;
