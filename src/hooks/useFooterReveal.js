// src/hooks/useFooterReveal.js
import { useState, useEffect } from "react";

export const useFooterReveal = (threshold = 200, delay = 500) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    let timer = null;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition >= documentHeight - threshold) {
        // Start a timer to reveal the footer after the specified delay
        if (!timer) {
          timer = setTimeout(() => {
            setIsRevealed(true);
            timer = null;
          }, delay);
        }
      } else {
        // If the user scrolls away before delay, clear the timer and hide the footer links
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setIsRevealed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case the page loads already scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [threshold, delay]);

  return isRevealed;
};
