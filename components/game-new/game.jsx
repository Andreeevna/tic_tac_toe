import { useReducer } from 'react'
import { computeWinner } from './model/compute-winner'
import { computeWinnerSymbol } from './model/compute-winner-symbol'
import {
	GAME_STATE_ACTIONS,
	gameStateReducer,
	initGameState,
} from './model/game-state-reducer'
import { getNextMove } from './model/get-next-move'
import { BackLink } from './ui/back-link'
import { players } from './ui/constants'
import { GameCell } from './ui/game-cell'
import { Gameinfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameMoveInfo } from './ui/game-move-info'
import { GameOverModal } from './ui/game-over-modal'
import { Gametitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

const PLAYERS_COUNT = 2

export const Game = () => {
	const [gameState, dispatch] = useReducer(
		gameStateReducer,
		{ playersCount: PLAYERS_COUNT },
		initGameState
	)
	const winnerSequence = computeWinner(gameState)
	const nextMove = getNextMove(gameState)
	const winnerSymbol = computeWinnerSymbol(gameState, {
		winnerSequence,
		nextMove,
	})

	const winnerPlayer = players.find(player => player.symbol === winnerSymbol)

	const { cells, currentMove } = gameState

	return (
		<>
			<GameLayout
				backLink={<BackLink />}
				gameInfo={
					<Gameinfo
						isRatingGame
						playersCount={PLAYERS_COUNT}
						timeMode={'1 минута на ход'}
					/>
				}
				title={<Gametitle />}
				playersList={players.slice(0, PLAYERS_COUNT).map((player, index) => (
					<PlayerInfo
						key={player.id}
						avatar={player.avatar}
						name={player.name}
						rating={player.rating}
						seconds={60}
						symbol={player.symbol}
						isRight={index % 2 === 1}
					/>
				))}
				gameMoveInfo={
					<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
				}
				gameCells={cells.map((cell, index) => (
					<GameCell
						disabled={!!winnerSymbol}
						isWinner={winnerSequence?.includes(index)}
						key={index}
						onClick={() =>
							dispatch({
								type: GAME_STATE_ACTIONS.CELL_CLICK,
								index,
							})
						}
						symbol={cell}
					/>
				))}
			/>
			<GameOverModal
				players={players.slice(0, PLAYERS_COUNT).map((player, index) => (
					<PlayerInfo
						key={player.id}
						avatar={player.avatar}
						name={player.name}
						rating={player.rating}
						seconds={60}
						symbol={player.symbol}
						isRight={index % 2 === 1}
					/>
				))}
				winnerName={winnerPlayer?.name}
			/>
		</>
	)
}
