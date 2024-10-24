import Image from "next/image";

import SliderAuth from "@/assets/img/SliderAuth.png";
import LoginForm from "@/components/form/login.form";

const LoginPage = () => {
  return (
    <div className="relative mb-[280px] mt-[200px]">
      <div className="l-container flex items-center justify-between">
        <div className="absolute left-0 flex-1">
          <Image alt="slider auth" height={781} src={SliderAuth} width={805} />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
