import {
	setCellArray,
	setCurrentSymbol,
	setWin,
	resetGame as resetGameAction,
} from "@/xo/app/store/xo/actions";
import { RootState, store } from "@/xo/app/store/xo";
import { useDispatch, useSelector } from "react-redux";

export const useXOStore = () => {
	const stateCellArray = useSelector((state: RootState) => state.cellArray);
	const stateCurrentSymbol = useSelector(
		(state: RootState) => state.currentSymbol
	);
	const stateWinCheck = useSelector((state: RootState) => state.winCheck);
	const dispatch = useDispatch();

	const checkWin = (array: string[][], symbol: "X" | "O") => {
		const isRowWin = array.some((row) => row.every((cell) => cell === symbol));
		const isColWin = [0, 1, 2].some(
			(col) =>
				array[0][col] === symbol &&
				array[1][col] === symbol &&
				array[2][col] === symbol
		);
		const isDiagWin =
			(array[0][0] === symbol &&
				array[1][1] === symbol &&
				array[2][2] === symbol) ||
			(array[0][2] === symbol &&
				array[1][1] === symbol &&
				array[2][0] === symbol);

		if (isRowWin || isColWin || isDiagWin) {
			dispatch(setWin(symbol));
			return;
		}

		const isDraw = array.flat().every((cell) => cell !== "");
		if (isDraw) {
			dispatch(setWin("draw"));
		}
	};

	const handleCurrentSymbol = (i: number, j: number) => {
		if (stateWinCheck || stateCellArray[i][j]) return;

		const newArray = stateCellArray.map((row) => [...row]);
		newArray[i][j] = stateCurrentSymbol;
		store.dispatch(setCellArray(newArray));
		checkWin(newArray, stateCurrentSymbol);
		store.dispatch(setCurrentSymbol(stateCurrentSymbol === "X" ? "O" : "X"));
	};

	const resetGame = () => {
		store.dispatch(resetGameAction());
	};

	return {
		currentSymbol: stateCurrentSymbol,
		cellArray: stateCellArray,
		win: stateWinCheck,
		handleCurrentSymbol,
		resetGame,
	};
};
