import React from 'react'
import useGameState from './use-game-state'

import styles from './Game.module.css'
import { GameCell } from './game-cell'
import { GameInfo } from './game-info'

export const Game = () => {
	const {
		cells,
		currentStep,
		winnerSeq,
		handleCellClick,
		handleResetClick,
		winnerSymbol,
		isDraw,
	} = useGameState()
	return (
		<div className={styles.game}>
			<GameInfo
				isDraw={isDraw}
				winnerSeq={winnerSeq}
				winnerSymbol={winnerSymbol}
				currentStep={currentStep}
			/>

			<div className={styles.game_field}>
				{cells.map((symbol, index) => {
					return (
						<GameCell
							key={index}
							symbol={symbol}
							isWinner={winnerSeq?.includes(index)}
							onClick={() => handleCellClick(index)}
						/>
					)
				})}
			</div>
			<button className={styles.reset} onClick={handleResetClick}>
				Сбросить
			</button>
		</div>
	)
}
