import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="mt-9 mx-auto flex justify-between">
        <Image src={"/search.svg"} alt="search" width={20} height={20} />
        <p className="text-white font-extrabold text-2xl leading-[30px]">
          METAVERSUS
        </p>
        <Image src={"/menu.svg"} alt="menu" width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
