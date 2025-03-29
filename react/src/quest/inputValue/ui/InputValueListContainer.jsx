import React from "react";
import styles from "../style/style.module.css";
import { InputValueList } from "./InputValueList";

export const InputValueListContainer = ({ arrList }) => {
	return (
		<div className={styles["list-container"]}>
			<h2 className={styles["list-heading"]}>Список:</h2>
			{arrList && arrList.length ? (
				<InputValueList arrList={arrList} />
			) : (
				<p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
			)}
		</div>
	);
};
