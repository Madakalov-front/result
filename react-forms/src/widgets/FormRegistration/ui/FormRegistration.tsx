import { useForm } from "react-hook-form";
import { Button, Input } from "../../../entities";
import styles from "../style/form-registration.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistationFormData,
  registrationSchema,
} from "../../../shared/schemas/schema-registration";
import { useEffect, useRef } from "react";

export const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isValid },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
    defaultValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
  });

  const refButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isValid && refButton.current) {
      refButton.current.focus();
    }
  }, [isValid, refButton]);
  const onSubmit = (data: RegistationFormData) => {
    console.log(data);
  };

  return (
    <div className={styles["form-registration-wrapper"]}>
      <form
        className={styles["form-registration"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          title={"Login"}
          placeholder={"Придумайте логин"}
          {...register("login")}
          name="login"
          type="text"
          isValid={
            touchedFields.login && dirtyFields.login && !errors.login?.message
          }
          error={dirtyFields.login ? errors.login?.message : ""}
        />
        <Input
          title={"Password"}
          placeholder={"Придумайте пароль"}
          {...register("password")}
          name="password"
          type="password"
          isValid={touchedFields.password && dirtyFields.password}
          error={dirtyFields.password ? errors.password?.message : ""}
        />
        <Input
          title={""}
          placeholder={"Повторите пароль"}
          {...register("confirmPassword")}
          name="confirmPassword"
          type="password"
          isValid={touchedFields.confirmPassword && dirtyFields.confirmPassword}
          error={
            dirtyFields.confirmPassword ? errors.confirmPassword?.message : ""
          }
        />
        <Button
          refCallback={refButton}
          type="submit"
          title="Зарегистрироваться"
          disable={!isValid}
        />
      </form>
    </div>
  );
};
