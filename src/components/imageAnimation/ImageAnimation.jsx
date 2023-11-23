import React, { useEffect, useState } from "react";
import MyIcon from "../../img/OtoIconV.png";
import "animate.css";

const ImageAnimation = () => {
  const [animationClass, setAnimationClass] = useState("animate__zoomInDown");

  useEffect(() => {
    const zoomOutTimeout = setTimeout(() => {
      setAnimationClass("animate__zoomOutUp");
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(zoomOutTimeout);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "60%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
      }}
    >
      <img
        src={MyIcon} // Replace with the URL of your image
        alt="Centered Image"
        className={`animate__animated ${animationClass}`}
        style={{ maxWidth: "50%", maxHeight: "50%" }} // Adjust these values
      />
    </div>
  );
};

export default ImageAnimation;
