import { useState } from 'react'
import './App.css'

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

const computeWinner = cells => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return [a, b, c]
		}
	}
}

function App() {
	const [cells, setCells] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	])
	const [currentStep, setCurrentStep] = useState(SYMBOL_O)
	const [winnerSeq, setWinnerSeq] = useState()

	const getSymbolClassName = symbol => {
		if (symbol === SYMBOL_O) return 'symbol--o'
		if (symbol === SYMBOL_X) return 'symbol--x'
		return ''
	}

	const renderSymbol = symbol => (
		<span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
	)

	const handleCellClick = index => {
		if (cells[index] || winnerSeq) {
			return
		}

		const copyCells = cells.slice()
		copyCells[index] = currentStep
		const winner = computeWinner(copyCells)

		setCells(copyCells)
		setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
		setWinnerSeq(winner)
	}

	const handleResetClick = () => {
		setCells(Array.from({ length: 9 }), () => null)
		setCurrentStep(SYMBOL_X)
		setWinnerSeq(null)
	}

	const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined
	const isDraw = !winnerSeq && cells.filter(value => value).length === 9

	return (
		<div className='game'>
			<div className='game-info'>
				{isDraw ? 'Ничья' : winnerSeq ? 'Победитель ' : ' Ход: '}
				{isDraw && renderSymbol(winnerSymbol ?? currentStep)}
			</div>
			<div className='game-field'>
				{cells.map((symbol, index) => {
					const isWinner = winnerSeq?.includes(index)
					return (
						<button
							key={index}
							className={`cell ${isWinner ? 'cell--win' : ''}`}
							onClick={() => handleCellClick(index)}
						>
							{symbol ? renderSymbol(symbol) : null}
						</button>
					)
				})}
			</div>
			<button className='reset' onClick={handleResetClick}>
				Сбросить
			</button>
		</div>
	)
}

export default App
