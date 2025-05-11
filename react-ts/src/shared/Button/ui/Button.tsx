import clsx from "clsx";
import { ButtonProps } from "../type";
import styles from '../style/btn.module.scss'
import { memo } from "react";

export const Button = memo(({
    text,
    type='button',
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
});
