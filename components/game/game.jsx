import useGameState from './use-game-state'

import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import { ResetButton } from './reset-button'

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
		<div className='flex flex-col items-center w-40 mx-auto my-24 border border-black p-5'>
			<GameInfo
				isDraw={isDraw}
				winnerSeq={winnerSeq}
				winnerSymbol={winnerSymbol}
				currentStep={currentStep}
			/>

			<div className='grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]'>
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

			<ResetButton onClick={handleResetClick} />
		</div>
	)
}
