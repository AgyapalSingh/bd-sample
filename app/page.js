"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Components/Header";
import IntroLoader from "./Components/LoadersComponent/IntroLoader";
import LoveMessage from "./Components/HomePageComponent/LoveMessage";
import PhotoGallery from "./Components/HomePageComponent/PhotoGallery";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) {
      ScrollTrigger.refresh();
    }
  }, [showIntro]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);

      if (!newMuted) {
        audioRef.current
          .play()
          .catch((err) => console.warn("Audio play blocked:", err));
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/sample-music.mp3"
        autoPlay
        loop
        muted={isMuted}
      />

      {showIntro && <IntroLoader onFinish={handleIntroFinish} />}

      <div className={`ag-main-content ${showIntro ? "hidden" : "visible"}`}>
        <button className="ag-mute-button" onClick={toggleMute}>
          {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </button>

        <Header />
        <section className="ag-love-message-section">
          <LoveMessage />
        </section>
        <section className="ag-photo-gallery-section">
          <PhotoGallery />
        </section>
      </div>
    </>
  );
}
