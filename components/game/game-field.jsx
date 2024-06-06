import clsx from 'clsx'
import { useState } from 'react'
import { UIbutton } from '../uikit/ui-button'
import { CrossIon } from './icons/CrossIon'
import { ZeroIcon } from './icons/ZeroIcon'

const GAME_SYMBOLS = {
	ZERO: 'zero',
	CROSS: 'cross',
	TRINGLE: 'triangle',
	SQUARE: 'square',
}

const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.TRINGLE,
	GAME_SYMBOLS.SQUARE,
]

function getNextMove(currentMove) {
	const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1
	return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0]
}

export const GameField = ({ className }) => {
	const [cells, setSells] = useState(() => new Array(19 * 19).fill(null))
	const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS)

	const nextMove = getNextMove(currentMove)

	return (
		<GameFieldLayout className={className}>
			<GameMoveInfo
				actions={
					<>
						<UIbutton size='md' variant='primary'>
							Ничья
						</UIbutton>
						<UIbutton size='md' variant='outline'>
							Сдаться
						</UIbutton>
					</>
				}
			/>
			<GameGrid>
				{cells.map((_, i) => {
					return <GameCell key={i}></GameCell>
				})}
			</GameGrid>
		</GameFieldLayout>
	)
}

function GameCell({ children }) {
	return (
		<button className='border border-slate-200 -ml-px -mt-px flex items-center justify-center'>
			{children}
		</button>
	)
}

function GameFieldLayout({ children, className }) {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'
			)}
		>
			{children}
		</div>
	)
}

function GameMoveInfo({ actions }) {
	return (
		<div className='flex gap-3 items-center'>
			<div className='mr-auto'>
				<div className='flex items-center gap-1 text-xl leading-tight font-semibold'>
					Ход: <ZeroIcon className={'w-5 h-5'} />
				</div>
				<div className='flex items-center gap-1 text-xs leading-tight text-slate-400'>
					Следующий:
					<CrossIon />
				</div>
			</div>
			{actions}
		</div>
	)
}

function GameGrid({ children }) {
	return (
		<div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3'>
			{children}
		</div>
	)
}
