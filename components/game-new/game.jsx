import { BackLink } from './ui/back-link'
import { players } from './ui/constants'
import { Gameinfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { Gametitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

export const Game = () => {
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
		/>
	)
}
