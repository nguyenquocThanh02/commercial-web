"use client";
import React, {RefObject, useEffect, useRef, useState} from "react";
import Image from "next/image";

import backToTop from "@/assets/img/backToTop.png";

const ScrollToTop = () => {
  const headerRef: RefObject<HTMLDivElement> = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalHeight = docHeight - windowHeight;
      const percent = (scrollTop / totalHeight) * 100;

      setScrollPercent(percent);
      setIsVisible(scrollTop > 10 && percent > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (window.scrollY > 100) {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  };

  return (
    <div ref={headerRef} className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <div className="relative flex flex-col items-center">
          <div className="absolute top-[-25px] font-bold text-Secondary2">
            {Math.round(scrollPercent)}%
          </div>
          <Image
            alt="back to top"
            className="cursor-pointer"
            height={60}
            src={backToTop}
            width={60}
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
