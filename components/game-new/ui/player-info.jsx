import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GameSymbol } from './game-symbol'

export const PlayerInfo = ({
	isRight,
	name,
	rating,
	avatar,
	symbol,
	timer,
	timerStartAt,
}) => {
	const seconds = Math.ceil(timer / 1000)
	const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0')
	const secondsString = String(seconds % 60).padStart(2, '0')

	const isDanger = seconds < 10

	console.log(isDanger)
	const getTimerColor = () => {
		if (timerStartAt) {
			return isDanger ? 'text-orange-600' : 'text-slate-900'
		}
		return 'text-slate-200'
	}

	return (
		<div className='flex gap-3 items-center'>
			<div className={clsx('relative', isRight && 'order-3')}>
				<div className={'flex items-center gap-2 text-start text-teal-60 w-44'}>
					<Image src={avatar} width={48} height={48} alt='avatar' unoptimized />
					<div className='overflow-hidden'>
						<div className='text-lg leading-tight truncate'>{name}</div>
						<div className='text-slate-400 text-xs leading-tight'>
							Рейтинг: {rating}
						</div>
					</div>
				</div>
				<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
					<GameSymbol symbol={symbol} />
				</div>
			</div>
			<div
				className={clsx('h-6 w-px bg-slate-200', isRight && 'order-2')}
			></div>
			<div
				className={clsx(
					'text-lg font-semibold w-[60px]',
					isRight && 'order-1',
					getTimerColor()
				)}
			>
				{minutesString}:{secondsString}
			</div>
		</div>
	)
}

function useNow(inderval, enabled) {
	const [now, setNow] = useState()

	useEffect(() => {
		if (!enabled) {
			setNow(undefined)
		}

		const int = setInterval(() => {
			setNow(Date.now())
		}, inderval)

		return () => {
			clearInterval(int)
		}
	}, [inderval, enabled])

	return now
}
