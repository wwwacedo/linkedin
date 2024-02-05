const BUTTON = {
	borderRadius: '0.5rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	padding: '0.6rem 1.2rem',
	fontSize: '1rem',
	fontFamily: 'inherit',
	backgroundColor: '#1a1a1a',
	transition: 'all 0.25s',
	cursor: 'pointer',
}

const ENABLED = {
	borderColor: '#0079FF',
	'&:hover': {
		borderColor: 'rgba(255, 255, 255, 0.87)'
	}
}

const DISABLED = {
	color: 'rgba(255, 255, 255, 0.5)'
}


export default function Button({ active, handleOnClick }) {
	return (
		<button
			style={{...BUTTON, ...(active ? DISABLED : ENABLED)}}
			onClick={() => handleOnClick()}
		>
			{active ? 'Wait...' : 'Start'}
		</button>
	)
}
