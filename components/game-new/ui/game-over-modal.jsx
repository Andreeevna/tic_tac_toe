import { UIbutton } from '../../uikit/ui-button'
import { UImodal } from '../../uikit/ui-modal'

export const GameOverModal = ({ winnerName, players }) => {
	return (
		<UImodal
			width='md'
			isOpen={winnerName}
			onClose={() => console.log('close')}
		>
			<UImodal.header>Игра завершена</UImodal.header>
			<UImodal.body>
				<div className='text-sm'>
					Победитель: <span className='text-teal-600'>{winnerName}</span>
				</div>
				<div className='grid grid-cols-2 justify-between gap-3 mt-2'>
					{players}
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
