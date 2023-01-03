import React from "react";
import {
  About,
  Explore,
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
    </div>
  );
};

export default page;
