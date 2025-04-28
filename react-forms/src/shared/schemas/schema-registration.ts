import { z } from "zod";

export const registrationSchema = z
  .object({
    login: z
      .string()
      .min(3, { message: "Логин не может быть короче 3-х символов" })
      .regex(/[a-z]/i, { message: "Минимум одна лат. буква" })
      .regex(/^[a-z0-9_]/i, { message: "Допустимы лат. буквы, цифры и _." })
      .max(26, { message: "Допустимая длина 26 символов" }),
    password: z
      .string()
      .min(8, { message: "Минимальная длина 8 символов" })
      .regex(/[A-Z]/, { message: "Минимум одна заглавная буква" })
      .regex(/[0-9]/, { message: "Минимум одна цифра" }),
    confirmPassword: z.string().min(8, { message: "Подтвердите пароль" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegistationFormData = z.infer<typeof registrationSchema>;
