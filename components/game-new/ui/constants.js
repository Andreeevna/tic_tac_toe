import avatarSrc1 from './images/avatar1.png'
import avatarSrc3 from './images/avatar2.png'
import avatarSrc2 from './images/avatar3.png'
import avatarSrc4 from './images/avatar4.png'

export const GAME_SYMBOLS = {
	ZERO: 'zero',
	CROSS: 'cross',
	TRINGLE: 'triangle',
	SQUARE: 'square',
}

export const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.TRINGLE,
	GAME_SYMBOLS.SQUARE,
]

export const players = [
	{
		id: 1,
		name: 'Paromonov',
		rating: '1230',
		avatar: avatarSrc1,
		symbol: GAME_SYMBOLS.CROSS,
	},
	{
		id: 2,
		name: 'VereIntedinglapotur',
		rating: '850',
		avatar: avatarSrc2,
		symbol: GAME_SYMBOLS.ZERO,
	},
	{
		id: 3,
		name: 'Lara',
		rating: '1440',
		avatar: avatarSrc3,
		symbol: GAME_SYMBOLS.TRINGLE,
	},
	{
		id: 4,
		name: 'Долматов',
		rating: '760',
		avatar: avatarSrc4,
		symbol: GAME_SYMBOLS.SQUARE,
	},
]
