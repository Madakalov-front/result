import styles from "../style/input.module.scss";

export const Input = () => {
    return (
        <label className={styles.label}>
            <input type="text" className={styles.input} />
        </label>
    );
};
