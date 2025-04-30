"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const IntroLoader = ({ onFinish }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoRef = useRef(null);

  const heartsRef = useRef([]);

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const NUM_HEARTS = screenWidth < 768 ? 80 : 200;
    document.body.style.overflow = "hidden";

    const heartData = Array.from({ length: NUM_HEARTS }, () => ({
      left: Math.random() * 100 + "vw",
      size: Math.random() * 20 + 10 + "px",
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setHearts(heartData);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (onFinish) onFinish();
      },
    });

    tl.to(
      leftDoorRef.current,
      { x: "-100%", duration: 1.5, ease: "power3.inOut" },
      "+=0.5"
    )
      .to(
        rightDoorRef.current,
        { x: "100%", duration: 1.5, ease: "power3.inOut" },
        "<"
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 3, ease: "power2.out" }
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
  }, []);

  useEffect(() => {
    if (hearts.length === 0) return;

    hearts.forEach((_, i) => {
      const el = heartsRef.current[i];
      if (el) {
        gsap.fromTo(
          el,
          { y: "-10vh", opacity: 1 },
          {
            y: "110vh",
            opacity: 0,
            duration: hearts[i].duration,
            delay: hearts[i].delay,
            ease: "power1.inOut",
            repeat: -1,
          }
        );
      }
    });
  }, [hearts]);

  return (
    <div ref={containerRef} className="ag-intro-loader-container">
      <div ref={leftDoorRef} className="ag-intro-left-door" />
      <div ref={rightDoorRef} className="ag-intro-right-door" />
      {hearts.map((heart, i) => (
        <div
          key={i}
          ref={(el) => (heartsRef.current[i] = el)}
          className="absolute text-pink-500 z-10"
          style={{
            left: heart.left,
            fontSize: heart.size,
            top: 0,
            position: "absolute",
          }}
        >
          <FaHeart />
        </div>
      ))}

      <div ref={logoRef} className="ag-intro-logo">
        <div className="ag-intro-image">
          <Image
            src="/images/OG-1.png"
            alt="Description of image"
            width={300}
            height={450}
            priority
          />
        </div>
        <p className="ag-intro-logo-title">Welcome Baby Girl</p>
      </div>
    </div>
  );
};

export default IntroLoader;
