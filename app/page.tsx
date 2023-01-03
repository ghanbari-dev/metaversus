import React from "react";
import About from "../components/About";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatsNew from "../components/WhatsNew";
import Worlds from "../components/Worlds";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />

      <Hero />

      <About />

      <Worlds />

      <GetStarted />

      <WhatsNew />
    </div>
  );
};

export default page;
