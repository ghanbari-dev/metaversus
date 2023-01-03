import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="mt-56 flex flex-col items-center text-gray-400">
      <div className="head-sub">
        About Metaverus
      </div>
      <p className="mt-2 text-center text-[32px] leading-[57.6px]">
        <span className="text-white font-bold">Metaverse</span> is a new thing
        in the future, where you can enjoy the virtual world by feeling like
        it's really real, you can feel what you feel in this metaverse world,
        because this is really the{" "}
        <span className="text-white font-bold">madness of the metaverse</span>{" "}
        of today, using only <span className="text-white font-bold">VR</span>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="text-white font-bold">explore</span>
        the madness of the metaverse by scrolling down
      </p>
      <Link href="#" className="mt-7">
        <Image src="/arrow-down.svg" alt="arrow-down" width={18} height={28} />
      </Link>
    </div>
  );
};

export default About;
