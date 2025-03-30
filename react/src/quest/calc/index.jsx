import React from "react";
import style from "./style/style.module.scss";
import ListNumber from "./ui/ListNumber";
import ListOperant from "./ui/ListOperant";
import InputValue from "./ui/InputValue";
import { useCalc } from "./hooks/useCalc";

export const Calc = () => {


	const { onChangeValue, onNumValue, checkOperant, value, wasEqualsPressed } = useCalc();

	return (
		<>
			<div className={style.calc}>
				<InputValue value={value} onChange={onChangeValue} wasEqualsPressed={wasEqualsPressed} />
				<ListNumber onClick={onNumValue} />
				<ListOperant onClick={checkOperant} />
			</div>
		</>
	);
};
