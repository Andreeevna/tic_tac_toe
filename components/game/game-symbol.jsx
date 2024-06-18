import { CrossIon } from '../game-new/ui/icons/CrossIon'
import { SquareIcon } from '../game-new/ui/icons/SquareIcon'
import { TringleIcon } from '../game-new/ui/icons/TringleIcon'
import { ZeroIcon } from '../game-new/ui/icons/ZeroIcon'
import { GAME_SYMBOLS } from './constants'

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
