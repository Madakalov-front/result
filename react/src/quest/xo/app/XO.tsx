import { PlayerTurnDisplay } from "../entities/PlayerTurnDisplay";
import { SelectedCellDisplay } from "../entities/SelectedCellDisplay";
import { useXO } from "./model/useXO";

export const XO = () => {
	const { currentSymbol, cellArray, win, handleCurrentSymbol, resetGame } = useXO();

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
			<button className="cell-reset" onClick={resetGame}>Начать заново</button>
		</>
	);
};
