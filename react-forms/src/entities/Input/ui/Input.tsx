import clsx from "clsx";
import styles from "../style/input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password";
  name: string;
  title: string;
  placeholder: string;
  error?: string;
  isValid: boolean | undefined;
}

export const Input = ({
  type,
  error,
  isValid,
  name,
  title,
  ...props
}: InputProps) => {
  const clsValid = isValid && styles["field--valid"];
  const clsError = error ? styles["field--error"] : "";

  return (
    <div
      className={clsx(styles.field, clsError, clsValid)}
      data-error-message={error}
    >
      <label htmlFor={name} className={styles.field__label}>
        {title}
        <input
          id={name}
          name={name}
          type={type}
          className={clsx(
            styles.field__input,
            type && styles[`field__input--${type}`]
          )}
          {...props}
        />
      </label>
    </div>
  );
};
