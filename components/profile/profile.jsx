import clsx from 'clsx'

import Image from 'next/image'

import Avatar from './avatar.png'

export const Profile = ({ className }) => {
	return (
		<div
			className={clsx(
				'flex items-center gap-2 text-start text-teal-60 ',
				className
			)}
		>
			<Image src={Avatar} width={48} height={48} alt='avatar' unoptimized />
			<div>
				<div className='text-lg leading-tight'>Paramovevg</div>
				<div className='text-slate-400 text-xs leading-tight'>
					Рейтинг: 1230
				</div>
			</div>
		</div>
	)
}
