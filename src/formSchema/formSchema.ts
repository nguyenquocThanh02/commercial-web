import {z} from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  account: z.union([
    z
      .string()
      .trim()
      .min(1, {
        message: "Account is required.",
      })
      .email({
        message: "Format is invalid",
      }),
    z
      .string()
      .trim()
      .refine(
        (value) => {
          const isValidPhone = /^0\d{9}$/.test(value);

          console.log("Validating phone:", value, "->", isValidPhone);

          return isValidPhone;
        },
        {
          message: "Phone number must be a valid Vietnamese number (e.g., 0779118899).",
        },
      ),
  ]),
  password: z
    .string()
    .trim()
    .min(8, {
      message: "Password has at least 8 characters.",
    })
    .regex(/^(?=.*[a-z])/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least one digit.",
    })
    .regex(/^(?=.*[@$!%*?&])/, {
      message: "Password must contain at least one special character (@$!%*?&).",
    }),
});

export const loginSchema = z.object({
  account: z.union([
    z
      .string()
      .trim()
      .min(1, {
        message: "Account is required.",
      })
      .email({
        message: "Format is invalid",
      }),
    z
      .string()
      .trim()
      .refine(
        (value) => {
          const isValidPhone = /^0\d{9}$/.test(value);

          console.log("Validating phone:", value, "->", isValidPhone);

          return isValidPhone;
        },
        {
          message: "Phone number must be a valid Vietnamese number (e.g., 0779118899).",
        },
      ),
  ]),
  password: z
    .string()
    .trim()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .regex(/^(?=.*[a-z])/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least one digit.",
    })
    .regex(/^(?=.*[@$!%*?&])/, {
      message: "Password must contain at least one special character (@$!%*?&).",
    }),
});
