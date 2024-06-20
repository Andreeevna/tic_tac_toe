// export function getNextMove(currentMove, playersCount, playersTimeOver) {
// 	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
// 		symbol => !playersTimeOver.includes(symbol)
// 	)
// 	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
// 	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
// }

import { MOVE_ORDER } from '../ui/constants'

export function getNextMove({ currentMove, playersCount }) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}
