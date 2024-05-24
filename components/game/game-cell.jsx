import styles from './Game.module.css'
import { GameSymbol } from './game-symbol'

export function GameCell({ isWinner, onClick, symbol }) {
	return (
		<button
			className={`${styles.cell} ${isWinner ? `${styles.cell__win}` : ''}`}
			onClick={onClick}
		>
			{symbol ? <GameSymbol symbol={symbol} /> : null}
		</button>
	)
}
