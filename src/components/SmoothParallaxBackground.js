// src/components/SmoothParallaxBackground.js
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const SmoothParallaxBackground = () => {
  const [scroll, setScroll] = useState(0);

  // Update the scroll value
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create a spring that interpolates both vertical translation and scale.
  // Adjust the multipliers to achieve your desired zoom and parallax speed.
  const springProps = useSpring({
    transform: `translate3d(0, ${scroll * 0.3}px, 0) scale(${1 + scroll * 0.0002})`,
    // Tweak tension/friction for a smoother effect. Lower tension/friction often results in a softer movement.
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div
      style={{
        ...springProps,
        height: "500px", // Adjust height as needed.
        backgroundImage: "url('/path/to/your-image.jpg')", // Update with your image path.
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform", // Hints to the browser for GPU acceleration.
      }}
    >
      {/* Optional: You can add overlay content here if needed */}
    </animated.div>
  );
};

export default SmoothParallaxBackground;
