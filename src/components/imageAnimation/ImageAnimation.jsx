import React, { useEffect, useState } from "react";
import MyIcon from "../../img/OtoIconV.png";
import "animate.css";

const ImageAnimation = () => {
  const [animationClass, setAnimationClass] = useState("animate__zoomInDown");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const zoomOutTimeout = setTimeout(() => {
      setAnimationClass("animate__zoomOutUp");
      // Set the timer to hide the image after the zoomOut animation
      const hideImageTimer = setTimeout(() => {
        setShowImage(false);
      }, 1000); // Set the time to hide the image after the second animation

      // Clean up the timer to avoid memory leaks
      return () => clearTimeout(hideImageTimer);
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
      {showImage && (
        <img
          src={MyIcon}
          alt="Centered Image"
          className={`animate__animated ${animationClass}`}
          style={{ maxWidth: "50%", maxHeight: "50%" }}
        />
      )}
    </div>
  );
};

export default ImageAnimation;
