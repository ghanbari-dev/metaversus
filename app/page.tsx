import React from "react";
import LightEffect from "../components/items/LightEffect";
import SectionWrapper from "../components/items/SectionWrapper";
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
      <SectionWrapper count={3} align="right" index={7}>
        <Header />
      </SectionWrapper>

      <SectionWrapper count={5} align="left" index={1}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper count={5} align="right" index={2}>
        <About />
      </SectionWrapper>

      <SectionWrapper count={5} align="left" index={3}>
        <Worlds />
      </SectionWrapper>

      <SectionWrapper count={5} align="right" index={4}>
        <GetStarted />
      </SectionWrapper>

      <SectionWrapper count={5} align="left" index={5}>
        <WhatsNew />
      </SectionWrapper>

      <SectionWrapper count={5} align="right" index={6}>
        <Explore />
      </SectionWrapper>

      <SectionWrapper count={5} align="left" index={7}>
        <Insight />
      </SectionWrapper>

      <SectionWrapper count={5} align="right" index={1}>
        <Founder />
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default page;
