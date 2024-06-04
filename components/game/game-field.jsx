import clsx from 'clsx'
import { UIbutton } from '../uikit/ui-button'
import { CrossIon } from './icons/CrossIon'
import { ZeroIcon } from './icons/ZeroIcon'

export const GameField = ({ className }) => {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'
			)}
		>
			<div className='flex gap-3'>
				<div className='mr-auto'>
					<div className='flex items-center gap-1 text-xl leading-tight font-semibold'>
						Ход: <ZeroIcon className={'w-5 h-5'} />
					</div>
					<div className='flex items-center gap-1 text-xs leading-tight text-slate-400'>
						Следующий:
						<CrossIon />
					</div>
				</div>
				<UIbutton size='md' variant='primary'>
					Ничья
				</UIbutton>
				<UIbutton size='md' variant='outline'>
					Сдаться
				</UIbutton>
			</div>
		</div>
	)
}
