import { PlayerTurnDisplay } from "../entities/PlayerTurnDisplay";
import { SelectedCellDisplay } from "../entities/SelectedCellDisplay";
import { useXOStore } from "./model/useXOStore";

export const XO = () => {
	const { currentSymbol, cellArray, win, handleCurrentSymbol, resetGame } =
		useXOStore();

	return (
		<>
			<PlayerTurnDisplay currentTurn={currentSymbol} />
			{win && (
				<div className="win-message">
					{win === "draw" ? "Ничья!" : `Победил: ${win}`}
				</div>
			)}
			<SelectedCellDisplay
				cellArray={cellArray}
				setCurrentSymbol={handleCurrentSymbol}
			/>
			<button className="cell-reset" onClick={resetGame}>
				Начать заново
			</button>
		</>
	);
};
