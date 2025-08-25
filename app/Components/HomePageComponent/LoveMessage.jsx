"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const LoveMessage = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ag-love-message">
      {showTypewriter && (
        <Typewriter
          options={{
            strings: [
              "' You make my world beautiful 🌸'",
              "' Every moment with you is a memory ❤️ '",
              "' I love you more every single day 🥰 '",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      )}
      <p className="ag-lm-author">~Your lover</p>
    </div>
  );
};

export default LoveMessage;
