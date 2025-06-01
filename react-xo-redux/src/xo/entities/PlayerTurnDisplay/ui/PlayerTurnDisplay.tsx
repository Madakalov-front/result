import { PlayerTurn } from "@/xo/app/store/xo/types";
import styles from "../style/player-turn.module.scss";
import clsx from "clsx";

type PlayerTurnDisplayProps = {
	currentTurn: PlayerTurn;
};

export const PlayerTurnDisplay = ({ currentTurn }: PlayerTurnDisplayProps) => {
	const currentClass = clsx(
		styles["player-turn__current"],
		styles[`player-turn__current--${currentTurn.toLowerCase()}`]
	);

	return (
		<div className={styles["player-turn"]}>
			Текущий ход игрока <span className={currentClass}>{currentTurn}</span>
		</div>
	);
};
