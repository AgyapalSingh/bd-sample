"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 6 });

    tl.fromTo(
      ".char",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  const splitText = (text) =>
    Array.from(text).map((char, i) => (
      <span key={i} className="char">
        {char}
      </span>
    ));

  return (
    <header>
      <div className="ag-header-container">
        <div className="ag-header-image">
          <Image
            src="/images/OG-2.png"
            alt="OG"
            width={300}
            height={450}
            priority
          />
        </div>

        <div className="ag-header-content">
          <h1>{splitText("Happy 😄")}</h1>
          <h1 className="ag-header-content-sp">{splitText("Birthday 🎂")}</h1>
          <h1>{splitText("Kake 👶")}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
