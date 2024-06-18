import Link from 'next/link'
import { ArrowLeft } from '../game-new/ui/icons/ArrowLeft'
import { HistoryIcon } from '../game-new/ui/icons/HistoryIcon'
import { StarIcon } from '../game-new/ui/icons/StarIcon'
import { UserIcon } from '../game-new/ui/icons/UserIcon'

export const GameTitle = ({ playersCount }) => {
	return (
		<div className='pl-2'>
			<Link
				href='#'
				className='flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5'
			>
				<ArrowLeft />
				На главную
			</Link>
			<h1 className='text-4xl leading-tight'>Крестики нолики</h1>
			<div className='flex items-center gap-3 text-xs text-slate-400'>
				<StarIcon />
				<div className='flex items-center gap-1'>
					<UserIcon /> {playersCount}
				</div>
				<div className='flex items-center gap-1'>
					<HistoryIcon /> 1 мин на ход
				</div>
			</div>
		</div>
	)
}
