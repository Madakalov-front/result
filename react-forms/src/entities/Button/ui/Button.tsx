import { RefObject } from "react";
import styles from "../style/btn.module.css";

export interface ButtonProps {
  type?: "submit" | "button";
  title: string;
  disable?: boolean;
  onClick?: () => void;
  refCallback: RefObject<HTMLButtonElement | null>;
}

export const Button = ({
  type = "button",
  title,
  disable = false,
  onClick,
  refCallback,
}: ButtonProps) => {
  return (
    <button
      ref={refCallback}
      type={type}
      onClick={onClick}
      className={styles.btn}
      disabled={disable}
    >
      {title}
    </button>
  );
};
