import Link from 'next/link'
import { ArrowLeft } from './icons/ArrowLeft'

export const BackLink = () => {
	return (
		<Link
			href='#'
			className='flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5'
		>
			<ArrowLeft />
			На главную
		</Link>
	)
}
