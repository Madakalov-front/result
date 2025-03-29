import React from "react";
import style from "../style/style.module.scss";

import { v4 as uuidv4 } from "uuid";

const ListOperant = ({ onClick }) => {
	const arrOperant = ["+", "-", "=", "c"];

	return (
		<ul className={style.operat}>
			{arrOperant.map((item) => (
				<li key={uuidv4()} className={style.operat__item} onClick={onClick}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default ListOperant;
