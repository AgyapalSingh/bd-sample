import React, { useEffect } from "react";
import gsap from "gsap";

const StarrySection = () => {
  useEffect(() => {
    const container = document.querySelector(".starry-bg");
    if (container) {
      const count = window.innerWidth < 768 ? 80 : 150;
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        container.appendChild(star);
      }

      document.querySelectorAll(".star").forEach((star) => {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        gsap.set(star, {
          width: size,
          height: size,
          x,
          y,
          opacity: 0,
        });

        gsap.to(star, {
          opacity: Math.random(),
          duration: Math.random() * 1.5 + 0.5,
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 5,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  return (
    <section className="starry-section">
      <div className="starry-bg"></div>
      {/* <div className="starry-content">
        <h1>✨ Welcome to the Starry Night ✨</h1>
        <p>This section has a magical star-filled background!</p>
      </div> */}
    </section>
  );
};

export default StarrySection;
