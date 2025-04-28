import { Input } from "@/entities/Input";
import { Button } from "@/shared/Button";
import styles from '../style/auth-form.module.css'
import { useAuthForm } from "../model/useAuthForm";

export const AuthFormVanilla = () => {
    const {
        formData,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateForm,
        isFormInvalid,
      } = useAuthForm();
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateForm();
    
        if (!isFormInvalid) {
          console.log("Форма отправлена:", formData);
        } else {
          console.log("Форма содержит ошибки!");
        }
      };
    
      return (
        <form className={styles.formAuth} onSubmit={handleSubmit} autoComplete="off">
          <Input
            title="Логин"
            name="login"
            value={formData.login}
            error={touched.login ? errors.login : ""}
            valid={touched.login && !errors.login}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Введите логин"
          />
          <Input
            title="Пароль"
            name="password"
            type="password"
            value={formData.password}
            error={touched.password ? errors.password : ""}
            valid={touched.password && !errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Введите пароль"
          />
          <Input
            title="Подтверждение пароля"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            error={touched.confirmPassword ? errors.confirmPassword : ""}
            valid={touched.confirmPassword && !errors.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Повторите пароль"
          />
          <Button
            type="submit"
            text="Зарегистрироваться"
            disabled={isFormInvalid}
          />
        </form>
      );
};
