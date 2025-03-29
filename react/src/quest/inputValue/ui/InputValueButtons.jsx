import React, { memo } from "react";
import styles from "../style/style.module.css";
import { InputValueButton } from "../shared/InputValueButton";

export const InputValueButtons = memo(({handlePrompt, handleAddItem, statusDisable}) => {

	return (
		<div className={styles["buttons-container"]}>
			<InputValueButton title="Ввести новое" onClick={handlePrompt} />
			<InputValueButton
				title="Добавить в список"
				onClick={handleAddItem}
				disabled={statusDisable}
			/>
		</div>
	);
});
