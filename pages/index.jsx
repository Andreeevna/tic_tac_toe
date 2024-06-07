import { useState } from 'react'
import { GameInfo, GameTitle } from '../components/game'
import { GameField } from '../components/game/game-field'
import { Header } from '../components/header'

function App() {
	const [playersCount] = useState(4)

	return (
		<div className='bg-slate-100 min-h-screen'>
			<Header />
			<main className='pt-6 mx-auto w-max'>
				<GameTitle playersCount={playersCount} />
				<GameInfo className='mt-4' playersCount={playersCount} />
				<GameField className='mt-6' playersCount={playersCount} />
			</main>
		</div>
	)
}

export default App
