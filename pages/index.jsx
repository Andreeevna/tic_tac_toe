import { useState } from 'react'
import { GameInfo, GameTitle, useGameState } from '../components/game'
import { GameField } from '../components/game/game-field'
import { GameSymbol } from '../components/game/game-symbol'
import { Header } from '../components/header'

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
