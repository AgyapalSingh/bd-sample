"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/gifts/Car-1.png",
  "/gifts/Car-2.png",
  "/gifts/Phone-1.png",
  "/gifts/Music-1.png",
  "/gifts/Googles.png",
  "/gifts/Per-1.png",
  "/gifts/Per-2.png",
  "/gifts/Car-1.png",
  "/gifts/Car-2.png",
  "/gifts/Phone-1.png",
  "/gifts/Music-1.png",
  "/gifts/Googles.png",
  "/gifts/Per-1.png",
  "/gifts/Per-2.png",
];

const GiftGallery = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const totalWidth = trackRef.current.scrollWidth / 2;

    gsap.to(trackRef.current, {
      x: `-${totalWidth}px`,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="ag-photo-gallery">
      <div className="ag-photo-track" ref={trackRef}>
        {[...images, ...images].map((src, index) => (
          <div className="ag-photo-item" key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={350}
              height={350}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftGallery;
