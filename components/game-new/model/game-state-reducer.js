import { GAME_SYMBOLS, MOVE_ORDER } from '../ui/constants'
import { getNextMove } from './get-next-move'

export const GAME_STATE_ACTIONS = {
	CELL_CLICK: 'cell-click',
}

export const initGameState = ({ playersCount, defaultTimer }) => ({
	cells: new Array(19 * 19).fill(null),
	currentMove: GAME_SYMBOLS.CROSS,
	playersCount,
	timers: MOVE_ORDER.reduce((timers, symbol, index) => {
		if (index < playersCount) {
			timers[symbol] = defaultTimer
		}
		return timers
	}, {}),
})

export const gameStateReducer = (state, action) => {
	switch (action.type) {
		case GAME_STATE_ACTIONS.CELL_CLICK: {
			const { index } = action

			if (state.cells[index]) {
				return state
			}

			return {
				...state,
				currentMove: getNextMove(state),
				cells: state.cells.map((cell, i) =>
					i === index ? state.currentMove : cell
				),
			}
		}
		default: {
			return state
		}
	}
}
