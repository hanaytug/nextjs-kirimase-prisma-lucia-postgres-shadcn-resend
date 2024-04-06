import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'must be at least 3 characters long' })
    .max(31, { message: 'cannot be more than 31 characters long' }),
  lastName: z
    .string()
    .min(3, { message: 'must be at least 3 characters long' })
    .max(31, { message: 'cannot be more than 31 characters long' }),
  email: z
    .string()
    .email()
    .min(5, { message: 'must be at least 5 characters long' })
    .max(31, { message: 'cannot be more than 31 characters long' }),
  password: z
    .string()
    .min(4, { message: 'must be at least 4 characters long' })
    .max(15, { message: 'cannot be more than 15 characters long' }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, { message: 'must be at least 5 characters long' })
    .max(31, { message: 'cannot be more than 31 characters long' }),
  password: z
    .string()
    .min(4, { message: 'must be at least 4 characters long' })
    .max(15, { message: 'cannot be more than 15 characters long' }),
});

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().min(4).optional(),
  firstName: z.string().min(3).max(31),
  lastName: z.string().min(3).max(31),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
