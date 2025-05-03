"use client";
import React, { useRef, useState } from "react";
import { FaLock, FaHeart } from "react-icons/fa";
import gsap from "gsap";

const SecretMessage = () => {
  const messageRef = useRef(null);
  const heartRef = useRef(null);
  const lockRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    if (unlocked) return;
    setUnlocked(true);

    const audio = new Audio("/music/unlock.mp3");
    audio.play();

    const tl = gsap.timeline();

    tl.to(lockRef.current, {
      scale: 1.5,
      rotate: 180,
      opacity: 0,
      duration: 2,
      ease: "back.in(1.7)",
    })
      .fromTo(
        heartRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          onComplete: () => {
            gsap.to(heartRef.current, {
              scale: 1.1,
              repeat: -1,
              yoyo: true,
              duration: 0.6,
              ease: "sine.inOut",
            });
          },
        }
      )
      .fromTo(
        messageRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
  };

  return (
    <div className="secret-container">
      <div className="glow-bg" />

      <div
        ref={lockRef}
        className="lock-icon"
        onClick={handleUnlock}
        role="button"
        aria-label="Unlock message"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
      >
        <FaLock />
      </div>

      <div ref={heartRef} className="heart-icon">
        <FaHeart />
      </div>

      <div ref={messageRef} className="secret-message">
        You are the most precious part of my life 💖
      </div>
    </div>
  );
};

export default SecretMessage;
