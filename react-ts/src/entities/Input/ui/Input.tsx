import styles from "../style/input.module.scss";
import type { InputProps } from "../types";
import { clsx } from 'clsx';

export const Input = ({
    value,
    error,
    type = "text",
    name,
    title,
    placeholder,
    valid = false,
    onChange,
    onBlur,
    onBeforeInput,
}: InputProps) => {

    const errorClass = error && styles.label_error;
    const validClass = valid && styles.label_valid;

    return (
        <label
            htmlFor={name + "-field"}
            className={clsx(styles.label, errorClass, validClass)}
            data-error-message={error}
        >
            {title && title + ':'}
            <input
                type={type}
                name={name}
                id={name + "-field"}
                onChange={onChange}
                onBeforeInput={onBeforeInput}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                className={styles.input}
            />
        </label>
    );
};
