import Image from 'next/image'

import { Profile } from '../profile'
import { ArrowDownIcon } from './icons/ArrowDownIcon'
import Logo from './logo.svg'

export const Header = () => {
	return (
		<header className='flex items-center h-24 px-8 bg-white shadow-lg'>
			<Image src={Logo} alt='Logo' />
			<div className='w-px h-8 bg-slate-200 mx-6' />
			<button className='w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight hover:bg-teal-500 transition-colors'>
				Играть
			</button>
			<button className='ml-auto flex items-center gap-2 text-start transition-colors text-teal-600 hover:text-teal-500 '>
				<Profile />
				<ArrowDownIcon />
			</button>
		</header>
	)
}
