"use client";
import React from "react";
import Image from "next/image";
import {signInWithPopup} from "firebase/auth";
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
      await signInWithPopup(auth, provider);

      localStorage.setItem(localStorageKey.accessToken, "fake-token-firebase");
      setIsAuth(true);
      route.push("/");
    } catch (error) {
      //
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
