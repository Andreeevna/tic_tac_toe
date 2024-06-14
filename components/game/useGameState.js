import { useState } from 'react'
import { GAME_SYMBOLS, MOVE_ORDER } from './constants'

function getNextMove(currentMove, playersCount) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)

	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}

function computerWinner(cells, sequenceSize = 5, filedSize = 19) {
	const gap = Math.floor(sequenceSize / 2)

	function compareElements(indexes) {
		let result = true

		for (let i = 1; i < indexes.length; i++) {
			result &&= !!cells[indexes[i]]
			result &&= cells[indexes[i]] === cells[indexes[i - 1]]
		}

		return result
	}

	function getSequenceIndexes(i) {
		const res = [[], [], [], []]

		for (let j = 0; j < sequenceSize; j++) {
			res[0].push(j - gap + i)
			res[1].push(filedSize * (j - gap) + (j - gap) + i)
			res[2].push(-filedSize * (j - gap) + (j - gap) + i)
			res[3].push(filedSize * (j - gap) + i)
		}

		return res
	}

	for (let i = 0; i < cells.length; i++) {
		if (cells[i]) {
			// console.log(getSequenceIndexes(i))

			const indexRows = getSequenceIndexes(i)
			const winnerIndexes = indexRows.find(row => compareElements(row))

			if (winnerIndexes) {
				return winnerIndexes
			}
		}
	}
}

export function useGameState(playersCount) {
	const [{ cells, currentMove }, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
	}))

	console.log(computerWinner(cells))

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
	}
}
