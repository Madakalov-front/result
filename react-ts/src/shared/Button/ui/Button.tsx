import clsx from "clsx";
import { ButtonProps } from "../type";
import styles from '../style/btn.module.scss'

export const Button = ({
    text,
    type,
    disabled,
    onClick,
    variant = "default",
    size = "size-m",
}: ButtonProps) => {
    const classNames = clsx(styles.btn, styles[`btn--${variant}`], styles[`btn--${size}`]);
    return (
        <button
            className={classNames}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
