import { z } from "zod";

export const authSchema = z.object({
  login: z.string().min(1, "Логин обязателен"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
  confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export type AuthFormData = z.infer<typeof authSchema>;