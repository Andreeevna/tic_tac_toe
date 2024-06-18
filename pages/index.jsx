import { Game } from '../components/game-new'
import { Header } from '../components/header/Header'

function App() {
	return (
		<HomePageLayout header={<Header />}>
			<Game />
		</HomePageLayout>
	)
}

export default App

export function HomePageLayout({ header, children }) {
	return (
		<div className='bg-slate-100 min-h-screen'>
			{header}
			<main className='pt-6 mx-auto w-max'>{children}</main>
		</div>
	)
}

{
	/* <GameTitle playersCount={playersCount} />
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
			/> */
}
