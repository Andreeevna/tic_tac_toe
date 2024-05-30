import { GameInfo, GameTitle } from '../components/game'
import { Header } from '../components/header'

function App() {
	return (
		<div className='bg-slate-100 min-h-screen'>
			<Header />
			<main className='pt-6 mx-auto max-w-[610px]'>
				<GameTitle />
				<GameInfo className='mt-4' />
			</main>
		</div>
	)
}

export default App
