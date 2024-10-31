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

export const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Format email is invalid",
    }),
});

export const infoCheckoutSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "First Name is required.",
  }),
  companyName: z.string().trim().optional(),
  streetAddress: z.string().trim().min(1, {
    message: "Street Address is required.",
  }),
  other: z.string().trim().optional(),
  townCity: z.string().trim().min(1, {
    message: "Town/City is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone Number is required.",
  }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Format email is invalid",
    }),
});

export const profileSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: "First Name is required.",
    }),
    lastName: z.string().trim().min(1, {
      message: "Last Name is required.",
    }),
    email: z
      .string()
      .trim()
      .min(1, {
        message: "Email is required.",
      })
      .email({
        message: "Format email is invalid",
      }),
    address: z.string().trim().min(1, {
      message: "Street Address is required.",
    }),
    currentPassword: z
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
    newPassword: z
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
    confirmPassword: z
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
  })
  .superRefine(({confirmPassword, newPassword}, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match.",
        path: ["confirmPassword"],
      });
    }
  });

export const contactSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  message: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Format email is invalid",
    }),
  phone: z.string().trim().min(1, {
    message: "Phone number is required.",
  }),
});
