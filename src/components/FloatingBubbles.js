import React, { useEffect, useState } from "react";
import "./FloatingBubbles.css"; // Ensure this file exists

const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 60 + 30}px`,
    delay: `${Math.random() * 5}s`,
    speed: `${Math.random() * 10 + 5}s`, // Random speed
    rotation: `${Math.random() * 360}deg`, // Random initial rotation
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble bubble-realistic"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
            animationDuration: bubble.speed, // Different speed for each bubble
            transform: `rotate(${bubble.rotation})`, // Random rotation on start
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
