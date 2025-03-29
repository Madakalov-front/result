import React from "react";
import styles from "../style/style.module.css";

export const InputValueButton = ({ title, disabled = false, onClick}) => {
	return (
		<button className={styles["button"]} onClick={onClick} disabled={disabled}>
			{title}
		</button>
	);
};
