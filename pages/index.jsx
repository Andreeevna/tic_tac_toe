import { GameInfo, GameTitle } from '../components/game'
import { GameField } from '../components/game/game-field'
import { Header } from '../components/header'

function App() {
	return (
		<div className='bg-slate-100 min-h-screen'>
			<Header />
			<main className='pt-6 mx-auto max-w-[610px]'>
				<GameTitle />
				<GameInfo className='mt-4' />
				<GameField className='mt-6' />
			</main>
		</div>
	)
}

export default App
