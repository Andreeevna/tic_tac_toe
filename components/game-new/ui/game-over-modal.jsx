import { UIbutton } from '../../uikit/ui-button'
import { UImodal } from '../../uikit/ui-modal'

export const GameOverModal = ({ winnerSymbol }) => {
	return (
		<UImodal
			width='md'
			isOpen={winnerSymbol}
			onClose={() => console.log('close')}
		>
			<UImodal.header>Игра завершена</UImodal.header>
			<UImodal.body>
				<div className='text-sm'>
					Победитель: <span className='text-teal-600'>Paromonov</span>
				</div>
				<div className='text-sm'>
					Победитель: <span className='text-teal-600'>Paromonov</span>
				</div>
			</UImodal.body>
			<UImodal.footer>
				<UIbutton size='md' variant='outline'>
					Вернуться
				</UIbutton>
				<UIbutton size='md' variant='primary'>
					Играть снова
				</UIbutton>
			</UImodal.footer>
		</UImodal>
	)
}
