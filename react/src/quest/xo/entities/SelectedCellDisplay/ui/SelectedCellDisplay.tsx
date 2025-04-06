import clsx from "clsx";
import styles from "../style/selected-cell.module.scss";
import { v4 as uuid4 } from "uuid";
import { PlayerTurn } from "@/quest/xo/app/shared/types/types";

type SelectedCellDisplayProps = {
	cellArray: string[][];
	setCurrentSymbol: (idx_sub: number, idx_item: number) => void;
};

export const SelectedCellDisplay = ({
	setCurrentSymbol,
	cellArray,
}: SelectedCellDisplayProps) => {
	return (
		<div className={styles["selected-cell"]}>
			{cellArray.map((subArray, idx_sub) =>
				subArray.map((item, idx_item) => (
					<div
						key={uuid4()}
						className={clsx(
							styles["selected-cell__item"],
							cellArray[idx_sub][idx_item] &&
								styles[`selected-cell__item--${cellArray[idx_sub][idx_item].toLowerCase()}`]
						)}
						data-current-symbol={item}
						onClick={() => {
							setCurrentSymbol(idx_sub, idx_item);
						}}
					></div>
				))
			)}
		</div>
	);
};
