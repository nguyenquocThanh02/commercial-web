"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

import SliderAuth from "@/assets/img/SliderAuth.png";
import LoginForm from "@/components/form/login.form";

const LoginPage = () => {
  const [translateXValue, setTranslateXValue] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const offset = (windowWidth - 1440) / 2 + 135;

      setTranslateXValue(offset);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="l-container mt-[58px] flex items-center justify-between">
      <div
        className="transition-transform duration-300"
        style={{transform: `translateX(-${translateXValue}px)`}}
      >
        <Image alt="slider auth" height={781} src={SliderAuth} width={805} />
      </div>
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
