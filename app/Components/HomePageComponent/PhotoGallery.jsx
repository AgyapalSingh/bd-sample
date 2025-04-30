"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/images/OG-2.png",
  "/images/Both-OGs.png",
  "/images/Both-OGs-2.png",
  "/images/Both-OGs-3.png",
  "/images/OG-1.png",
  "/images/OG-2.png",
  "/images/Both-OGs.png",
  "/images/Both-OGs-2.png",
  "/images/Both-OGs-3.png",
  "/images/OG-1.png",
];

const PhotoGallery = () => {
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
              width={300}
              height={450}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
