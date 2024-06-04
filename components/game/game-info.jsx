import clsx from 'clsx'
import { Profile } from '../profile'
import { CrossIon } from './icons/CrossIon'

export const GameInfo = ({ className }) => {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between'
			)}
		>
			<div className='flex gap-3 items-center'>
				<div className='relative'>
					<Profile className='w-[180px]' />
					<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
						<CrossIon />
					</div>
				</div>
				<div className='h-6 w-px bg-slate-200'></div>
				<div className='text-slate-900 text-lg font-semibold'>01:08</div>
			</div>
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