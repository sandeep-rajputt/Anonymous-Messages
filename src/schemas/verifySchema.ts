import { z } from "zod";

export const verifySchema = z.object({
  code: z
    .string({ message: "Code must be a string" })
    .length(6, {
      message: "Code must be 6 digits",
    })
    .regex(/^[0-9]+$/, {
      message: "Code must only contain numbers",
    }),
});
