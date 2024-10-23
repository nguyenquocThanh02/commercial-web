"use client";
import React from "react";
import Image from "next/image";
import {signInWithPopup} from "firebase/auth";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

import {Button} from "../ui/button";

import iconGoogle from "@/assets/svg/IconGoogle.svg";
import {auth, provider} from "@/libs/firebase";
import {localStorageKey} from "@/constants/localStorage";
import {authStore} from "@/store";

const SignUpWithGoogleButton: React.FC<{text: string}> = ({text}) => {
  const {setIsAuth} = authStore();
  const route = useRouter();

  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // const data = result.user;
      // const user = {
      //   userName: data.displayName,
      //   email: data.email,
      //   userId: data.uid,
      // };

      localStorage.setItem(localStorageKey.accessToken, "token-with-firebase");
      setIsAuth(true);
      route.push("/");
    } catch (error) {
      toast.error("Error when login with google");
    }
  };

  return (
    <Button
      className="flex h-[56px] w-full gap-3 border border-Text2/40"
      type="button"
      variant="outline"
      onClick={handleSignUp}
    >
      <Image alt="icon google" sizes="24" src={iconGoogle} />
      {text}
    </Button>
  );
};

export default SignUpWithGoogleButton;
