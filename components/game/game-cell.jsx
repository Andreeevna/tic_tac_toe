import { clsx } from 'clsx'
import { GameSymbol } from './game-symbol'

export function GameCell({ isWinner, onClick, symbol }) {
	return (
		<button
			className={clsx(
				'-ml-px -mt-px flex justify-center  items-center border border-gray-400 bg-transparent',
				isWinner ? 'bg-red-300' : ''
			)}
			onClick={onClick}
		>
			{symbol ? <GameSymbol symbol={symbol} /> : null}
		</button>
	)
}
