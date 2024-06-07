import clsx from 'clsx'
import { Profile } from '../profile'
import { GAME_SYMBOLS } from './constants'
import { GameSymbol } from './game-symbol'
import { CrossIon } from './icons/CrossIon'

const players = [
	{
		name: 'Paromonov',
		rating: '1230',
		avatar: '',
		symbol: GAME_SYMBOLS.CROSS,
	},
]

export const GameInfo = ({ className }) => {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between'
			)}
		>
			<PlayerInfo />
			<div className='flex gap-3 items-center'>
				<div className='text-orange-600 text-lg font-semibold'>01:08</div>
				<div className='h-6 w-px bg-slate-200'></div>
				<div className='relative'>
					<Profile className='w-[180px]' />
					<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
						<CrossIon />
					</div>
				</div>
			</div>
		</div>
	)
}

function PlayerInfo({ playerInfo }) {
	return (
		<div className='flex gap-3 items-center'>
			<div className='relative'>
				<Profile
					className='w-[180px]'
					name={playerInfo.name}
					rating={playerInfo.rating}
					avatar={playerInfo.avatar}
				/>
				<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
					<GameSymbol symbol={playerInfo.symbol} />
				</div>
			</div>
			<div className='h-6 w-px bg-slate-200'></div>
			<div className='text-slate-900 text-lg font-semibold'>01:08</div>
		</div>
	)
}
