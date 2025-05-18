import type { InputProps } from "../types/type-input";
import styles from '../style/input.module.css';
import { clsx } from 'clsx';

export const Input = ({
    value,
    name,
    type = "text",
    placeholder,
    onChange,
    onBlur,
}: InputProps) => {
    return (
        <div className={styles.field}>
            <input
                className={clsx(styles.field__input, styles[`field__input--${type}`])}
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};
