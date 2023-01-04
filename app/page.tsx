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
      <SectionWrapper align="right" index={7}>
        <Header />
      </SectionWrapper>

      <SectionWrapper align="left" index={1}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper align="right" index={2}>
        <About />
      </SectionWrapper>

      <SectionWrapper align="left" index={3}>
        <Worlds />
      </SectionWrapper>

      <SectionWrapper align="right" index={4}>
        <GetStarted />
      </SectionWrapper>

      <SectionWrapper align="left" index={5}>
        <WhatsNew />
      </SectionWrapper>

      <SectionWrapper align="right" index={6}>
        <Explore />
      </SectionWrapper>

      <SectionWrapper align="left" index={7}>
        <Insight />
      </SectionWrapper>

      <SectionWrapper align="right" index={1}>
        <Founder />
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default page;
