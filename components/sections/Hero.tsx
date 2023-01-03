import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-44">
      <div className="text-white text-[144px] leading-[110%] font-bold tracking-tight uppercase flex items-center flex-col">
        <h1>METAVERSUS</h1>
        <div className="flex items-center w-[908.22px] z-20">
          <h1>ma</h1>
          <div className="flex-grow h-[108px] border-[18px] rounded-r-[50px] border-white mx-2" />
          <h1>ness</h1>
        </div>
      </div>
      <div className="relative -mt-14 h-[488px] w-screen z-10 rounded-tl-[140px] rounded-bl-[42px] overflow-hidden">
        <Image src="/cover.png" alt="hero" fill className="object-cover" />
      </div>
      <div className="flex justify-end">
        <Link
          href="#"
          className="relative -mt-[77px] h-[155px] w-[155px] z-20 overflow-hidden"
        >
          <Image src="/stamp.png" alt="hero" fill />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
