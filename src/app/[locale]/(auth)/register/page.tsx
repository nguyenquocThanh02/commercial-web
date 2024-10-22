import Image from "next/image";
import React from "react";

import SliderAuth from "@/assets/img/SliderAuth.png";
import RegisterForm from "@/components/form/register.form";
const RegisterPage = () => {
  return (
    <div className="mt-[58px] flex w-[1305px] items-center justify-between">
      <Image alt="slider auth" height={781} src={SliderAuth} width={805} />
      <div className="flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
