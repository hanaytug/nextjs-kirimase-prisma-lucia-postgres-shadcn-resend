import { z } from 'zod';

export const emailSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export const verificationEmailSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  verificationCode: z.string().min(6),
});
