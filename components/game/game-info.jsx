import styles from './Game.module.css'
import { GameSymbol } from './game-symbol'

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
	if (isDraw) {
		return <div className={styles.game_info}>Ничья</div>
	}

	if (winnerSymbol) {
		return (
			<div className={styles.game_info}>
				Победитель: <GameSymbol symbol={winnerSymbol} />
			</div>
		)
	}

	return (
		<div className={styles.game_info}>
			Ход: <GameSymbol symbol={currentStep} />
		</div>
	)
}
