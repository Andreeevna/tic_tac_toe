export const ResetButton = ({ onClick }) => {
	return (
		<button
			className='mt-2 py-1 px-3 bg-transparent rounded-sm border border-gray-400 cursor-pointer'
			onClick={onClick}
		>
			Сбросить
		</button>
	)
}
