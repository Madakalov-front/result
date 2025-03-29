import React from "react";
import style from "../style/style.module.scss";


const InputValue = ({value, onChange}) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			className={style.value}
		/>
	);
};

export default InputValue;
