import { BackLink } from './ui/back-link'
import { Gameinfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { Gametitle } from './ui/game-title'

export const Game = () => {
	return (
		<GameLayout
			backLink={<BackLink />}
			gameInfo={
				<Gameinfo isRatingGame playersCount={4} timeMode={'1 минута на ход'} />
			}
			title={<Gametitle />}
		/>
	)
}
