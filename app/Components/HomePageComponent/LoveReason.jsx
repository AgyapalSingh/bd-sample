"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const LoveReason = () => {
  const reasons = [
    "You make the simplest moments unforgettable.",
    "You are my rock and my biggest cheerleader.",
    "You always know how to make me smile.",
    "You make every moment feel special.",
    "You support me through everything.",
    "You always listen and understand.",
    "You bring out the best in me.",
    "You love me unconditionally.",
  ];

  useEffect(() => {
    gsap.utils.toArray(".ag-reason-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="ag-reasons-container">
      <h2>Reasons Why I Love You 💖</h2>
      <ul className="ag-reasons-list">
        {reasons.map((reason, index) => (
          <li key={index} className="ag-reason-item">
            ⮞ {reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoveReason;
