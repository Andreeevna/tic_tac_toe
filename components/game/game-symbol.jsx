import styles from './Game.module.css'
import { SYMBOL_O, SYMBOL_X } from './constants'

export function GameSymbol({ symbol }) {
	const getSymbolClassName = symbol => {
		if (symbol === SYMBOL_O) return `${styles.symbol__o}`
		if (symbol === SYMBOL_X) return `${styles.symbol__x}`
		return ''
	}

	return (
		<span className={`${styles.symbol} ${getSymbolClassName(symbol)}`}>
			{symbol}
		</span>
	)
}
