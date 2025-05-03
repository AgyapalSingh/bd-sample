import React, { useState } from "react";
import gsap from "gsap";
import { FaUnlockAlt } from "react-icons/fa";

const SecretMessage = () => {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    const audio = new Audio("/music/unlock.mp3");
    audio.play();

    setUnlocked(true);
    gsap.to(".secret-overlay-left", {
      x: "-100%",
      duration: 3,
      ease: "power2.out",
    });
    gsap.to(".secret-overlay-right", {
      x: "100%",
      duration: 3,
      ease: "power2.out",
    });
    gsap.to(".secret-loker-btn", { opacity: 0, duration: 0.5, delay: 0.2 });
    gsap.to(".secret-message", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="secret-container">
      <div className="secret-overlay-left"></div>
      <div className="secret-overlay-right"></div>
      <div className="secret-message" style={{ opacity: 0 }}>
        You are the most precious part of my life 💖
      </div>
      {!unlocked && (
        <button className="secret-loker-btn" onClick={handleUnlock}>
          <FaUnlockAlt />
        </button>
      )}
    </div>
  );
};

export default SecretMessage;
