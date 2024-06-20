import clsx from 'clsx'
import { GameSymbol } from './ui/game-symbol'

export function GameCell({ onClick, isWinner, disabled, symbol }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={clsx(
				'border border-slate-200 -ml-px -mt-px flex items-center justify-center',
				isWinner && 'bg-orange-600/10'
			)}
		>
			{symbol && <GameSymbol className='w-5 h-5' symbol={symbol} />}
		</button>
	)
}
