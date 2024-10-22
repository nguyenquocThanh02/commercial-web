import Image from "next/image";
import React from "react";

import SliderAuth from "@/assets/img/SliderAuth.png";
import LoginForm from "@/components/form/login.form";
const LoginPage = () => {
  return (
    <div className="mt-[58px] flex w-[1305px] items-center justify-between">
      <Image alt="slider auth" height={781} src={SliderAuth} width={805} />
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
