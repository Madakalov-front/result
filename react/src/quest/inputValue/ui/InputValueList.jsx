import React from "react";
import styles from "../style/style.module.css";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export const InputValueList = ({ arrList }) => {
	return (
		<ul className={styles["list"]}>
			{arrList.map((item) => (
				<li key={uuidv4()} className={styles["list-item"]}>
					<strong> {item}</strong>
					<br /> <em> {dayjs().format("DD.MM.YYYY HH:mm:ss")} </em>
				</li>
			))}
		</ul>
	);
};
