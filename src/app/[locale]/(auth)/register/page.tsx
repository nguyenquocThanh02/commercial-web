import Image from "next/image";

import SliderAuth from "@/assets/img/SliderAuth.png";
import RegisterForm from "@/components/form/register.form";

const RegisterPage = () => {
  return (
    <div className="relative mb-[280px] mt-[200px]">
      <div className="l-container flex items-center justify-center xl:justify-between">
        <div className="absolute left-0 hidden w-1/2 flex-shrink xl:flex">
          <Image alt="slider auth" height={781} src={SliderAuth} width={805} />
        </div>
        <div className="flex flex-1 items-center justify-center xl:justify-end">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
