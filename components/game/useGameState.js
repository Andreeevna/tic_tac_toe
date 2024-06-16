import { useState } from 'react'
import { GAME_SYMBOLS } from './constants'
import { computerWinner, getNextMove } from './model'

export function useGameState(playersCount) {
	const [{ cells, currentMove }, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
		playersTimeOver: [],
	}))

	console.log(computerWinner(cells))
	const winnerSequence = computerWinner(cells)
	const nextMove = getNextMove(currentMove, playersCount)

	// обработка клика по клетке
	const handleCellClick = index => {
		setGameState(lastGameState => ({
			...lastGameState,
			currentMove: getNextMove(lastGameState.currentMove, playersCount),
			cells: lastGameState.cells.map((cell, i) =>
				i === index ? lastGameState.currentMove : cell
			),
		}))
	}

	const handlePlayerTimeOver = symbol => {
		setGameState(lastGameState => ({
			...lastGameState,
			playersTimeOver: [...lastGameState.playersTimeOver, symbol],
			currentMove: getNextMove(lastGameState.currentMove, playersCount),
		}))
	}

	return {
		cells,
		currentMove,
		nextMove,
		handleCellClick,
		handlePlayerTimeOver,
		winnerSequence,
	}
}
