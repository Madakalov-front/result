import React, { memo } from "react";
import style from "../style/style.module.scss";
import { v4 as uuidv4 } from "uuid";

const ListNumber = memo(({onClick}) => {
	const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	return (
		<ul className={style.num}>
			{arrNum.map((item) => (
				<li key={uuidv4()} className={style.num__item} onClick={onClick}>
					{item}
				</li>
			))}
		</ul>
	);
});

export default ListNumber;
