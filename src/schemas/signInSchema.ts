import { z } from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .regex(
      /^(?:(?:[a-zA-Z0-9_]{3,20})|(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/,
      "Must be a valid username or a valid email address"
    ),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});
