"use client";

import Image from "next/image";

import { useState } from "react";

const Card: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-[449px] h-[222px] flex-none order-0 flex-grow-0 relative">
      <Image
        src={toggle ? "/Icon360.svg" : "/IconClose.svg"}
        alt="360"
        className="absolute top-2 right-[50px]"
        width={33}
        height={22}
        onClick={() => setToggle(!toggle)}
        style={{
          cursor: "pointer",
          width: 33,
          height: 22,
        }}
      />
      <Image
        src={toggle ? "/image.png" : "/image.gif"}
        alt="Sofá"
        priority={false}
        width={449}
        height={253}
        draggable={false}
      />
    </div>
  );
};

export default Card;
