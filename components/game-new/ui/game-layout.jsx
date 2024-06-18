export const GameLayout = ({ backLink, title, gameInfo }) => {
	return (
		<div>
			<div className='pl-2'>
				{backLink}
				{title}
				{gameInfo}
			</div>
		</div>
	)
}
