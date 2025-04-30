"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Components/Header";
import IntroLoader from "./Components/LoadersComponent/IntroLoader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) {
      ScrollTrigger.refresh();
    }
  }, [showIntro]);
  return (
    <>
      {showIntro && <IntroLoader onFinish={handleIntroFinish} />}

      <div className={`ag-main-content ${showIntro ? "hidden" : "visible"}`}>
        <Header />
      </div>
    </>
  );
}
