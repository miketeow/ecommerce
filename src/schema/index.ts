import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
});

export const billboardSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});
