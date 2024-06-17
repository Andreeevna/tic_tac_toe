import { useState } from 'react'
import { GameInfo, GameTitle, useGameState } from '../components/game'
import { GameField } from '../components/game/game-field'
import { GameSymbol } from '../components/game/game-symbol'
import { Header } from '../components/header'
import { UIbutton } from '../components/uikit/ui-button'
import { UImodal } from '../components/uikit/ui-modal'

function App() {
	const [playersCount] = useState(4)
	const {
		cells,
		currentMove,
		nextMove,
		handleCellClick,
		winnerSequence,
		handlePlayerTimeOver,
		winnerSymbol,
	} = useGameState(playersCount)

	return (
		<div className='bg-slate-100 min-h-screen'>
			<Header />
			<main className='pt-6 mx-auto w-max'>
				<GameTitle playersCount={playersCount} />
				<GameInfo
					className='mt-4'
					playersCount={playersCount}
					currentMove={currentMove}
					isWinner={!!winnerSymbol}
					onPlayerTimeOver={handlePlayerTimeOver}
				/>
				<div className='my-4'>
					<GameSymbol symbol={winnerSymbol} />
				</div>
				<UImodal
					width='md'
					isOpen={winnerSymbol}
					onClose={() => console.log('close')}
				>
					<UImodal.header>Игра завершена</UImodal.header>
					<UImodal.body>
						<div className='text-sm'>
							Победитель: <span className='text-teal-600'>Paromonov</span>
						</div>
						<div className='text-sm'>
							Победитель: <span className='text-teal-600'>Paromonov</span>
						</div>
					</UImodal.body>
					<UImodal.footer>
						<UIbutton size='md' variant='outline'>
							Вернуться
						</UIbutton>
						<UIbutton size='md' variant='primary'>
							Играть снова
						</UIbutton>
					</UImodal.footer>
				</UImodal>
				<GameField
					className='mt-6'
					playersCount={playersCount}
					cells={cells}
					currentMove={currentMove}
					nextMove={nextMove}
					handleCellClick={handleCellClick}
					winnerSequence={winnerSequence}
					winnerSymbol={winnerSymbol}
				/>
			</main>
		</div>
	)
}

export default App
