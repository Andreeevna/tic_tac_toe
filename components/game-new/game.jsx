import { useGameState } from './model/use-game-state'
import { BackLink } from './ui/back-link'
import { players } from './ui/constants'
import { GameCell } from './ui/game-cell'
import { Gameinfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameMoveInfo } from './ui/game-move-info'
import { Gametitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

const PLAYERS_COUNT = 4
export const Game = () => {
	const {
		cells,
		currentMove,
		nextMove,
		handleCellClick,
		winnerSequence,
		winnerSymbol,
	} = useGameState(PLAYERS_COUNT)
	return (
		<GameLayout
			backLink={<BackLink />}
			gameInfo={
				<Gameinfo isRatingGame playersCount={4} timeMode={'1 минута на ход'} />
			}
			title={<Gametitle />}
			playersList={players.map((player, index) => (
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
			gameCells={cells.map((cell, i) => (
				<GameCell
					disabled={!!winnerSymbol}
					isWinner={winnerSequence?.includes(i)}
					key={i}
					onClick={() => handleCellClick(i)}
					symbol={cell}
				/>
			))}
		/>
	)
}
