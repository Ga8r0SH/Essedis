import React, { useState } from "react";
import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button className="scrollButton ZenKaku" onClick={handleClick}><FontAwesomeIcon icon={faArrowUp} size="2sm" color='#F26627' /></button>
    </div>
  );
}

export default ScrollToTopButton;