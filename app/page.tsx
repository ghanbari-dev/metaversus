import React from "react";
import {
  About,
  Explore,
  Footer,
  Founder,
  GetStarted,
  Header,
  Hero,
  Insight,
  WhatsNew,
  Worlds,
} from "../components/sections";

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

      <Explore />

      <Insight />

      <Founder />

      <Footer />
    </div>
  );
};

export default page;
