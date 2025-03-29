import React  from "react";
import styles from "../style/style.module.css";

export const InputValueDesc = ({value}) => {

	return (
		<p className={styles["no-margin-text"]}>
			Текущее значение <code>value</code>: "
			<output className={styles["current-value"]}>{value}</output>"
		</p>
	);
};
