import React, { useEffect, useState } from "react";
import "animate.css";

const BlackStrips = () => {
  const [fadeOut1, setFadeOut1] = useState(false);
  const [fadeOut2, setFadeOut2] = useState(false);
  const [fadeOut3, setFadeOut3] = useState(false);

  useEffect(() => {
    const delay1 = 2500;
    const delay2 = 3000;
    const delay3 = 3500;

    const timeoutId1 = setTimeout(() => {
      setFadeOut1(true);
    }, delay1);

    const timeoutId2 = setTimeout(() => {
      setFadeOut2(true);
    }, delay2);

    const timeoutId3 = setTimeout(() => {
      setFadeOut3(true);
    }, delay3);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* First black strip at the top */}
      <div
        className={`animate__animated ${fadeOut1 ? "animate__fadeOutUp" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "33%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 1,
        }}
      />

      {/* Second black strip in the middle */}
      <div
        className={`animate__animated ${fadeOut2 ? "animate__fadeOutUp" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: "33%",
          width: "33%",
          height: "100%",
          marginTop: "-10px",
          backgroundColor: "black",
          zIndex: 1,
        }}
      />

      {/* Third black strip at the bottom */}
      <div
        className={`animate__animated ${fadeOut3 ? "animate__fadeOutUp" : ""}`}
        style={{
          position: "fixed",
          bottom: 0,
          left: "66%",
          width: "34%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default BlackStrips;
