import {z} from "zod";

export const emailValidator = () =>
  z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Format email is invalid",
    });
