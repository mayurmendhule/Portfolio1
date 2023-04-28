import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down 300px
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
