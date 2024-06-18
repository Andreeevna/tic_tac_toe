import { GAME_SYMBOLS } from './constants'
import { CrossIon } from './icons/CrossIon'
import { SquareIcon } from './icons/SquareIcon'
import { TringleIcon } from './icons/TringleIcon'
import { ZeroIcon } from './icons/ZeroIcon'

export const GameSymbol = ({ symbol, className }) => {
	const Icon =
		{
			[GAME_SYMBOLS.CROSS]: CrossIon,
			[GAME_SYMBOLS.ZERO]: ZeroIcon,
			[GAME_SYMBOLS.TRINGLE]: TringleIcon,
			[GAME_SYMBOLS.SQUARE]: SquareIcon,
		}[symbol] ?? CrossIon
	return <Icon className={className} />
}
