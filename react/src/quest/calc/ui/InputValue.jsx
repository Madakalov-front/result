import React from "react";
import style from "../style/style.module.scss";
import clsx from "clsx";


const InputValue = ({value, onChange, wasEqualsPressed = false}) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			className={clsx(style.value, wasEqualsPressed ? style.result : '')}
		/>
	);
};

export default InputValue;
