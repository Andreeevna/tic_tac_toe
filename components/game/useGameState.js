import { useState } from 'react'
import { GAME_SYMBOLS } from './constants'
import { computerWinner, getNextMove } from './model'

export function useGameState(playersCount) {
	const [{ cells, currentMove }, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
	}))

	console.log(computerWinner(cells))
	const winnerSequence = computerWinner(cells)
	const nextMove = getNextMove(currentMove, playersCount)

	const handleCellClick = index => {
		setGameState(lastGameState => ({
			...lastGameState,
			currentMove: getNextMove(lastGameState.currentMove, playersCount),
			cells: lastGameState.cells.map((cell, i) =>
				i === index ? lastGameState.currentMove : cell
			),
		}))
	}

	return {
		cells,
		currentMove,
		nextMove,
		handleCellClick,
		winnerSequence,
	}
}
