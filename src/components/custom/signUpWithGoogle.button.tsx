"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {signInWithPopup} from "firebase/auth";
import {useTranslations} from "next-intl";

import {Button} from "../ui/button";

import iconGoogle from "@/assets/svg/IconGoogle.svg";
import {auth, provider} from "@/libs/firebase";
import {localStorageKey} from "@/constants/localStorage";

const SignUpWithGoogleButton = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  const t = useTranslations("Register");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const data = result.user;
      const user = {
        userName: data.displayName,
        email: data.email,
        image: data.photoURL,
        userId: data.uid,
      };

      console.log(user);
      if (isClient) {
        localStorage.setItem(localStorageKey.userLocal, JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
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
      {t("Button.google")}
    </Button>
  );
};

export default SignUpWithGoogleButton;
