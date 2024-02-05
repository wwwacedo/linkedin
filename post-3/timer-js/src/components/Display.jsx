const WRAPPER = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}

const NUMBER = {
	fontSize: '6rem',
	color: '#0079FF'
}

const DOTS = {
	fontSize: '3rem',
	color: '#dae3ee',
	padding: '.1rem'
}

export default function Display({ time }) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

	return (
		<div style={WRAPPER}>
			<div style={NUMBER}>{minutesLeft}</div>
			<div style={NUMBER}>{minutesRight}</div>
			<span style={DOTS}>:</span>
			<div style={NUMBER}>{secondsLeft}</div>
			<div style={NUMBER}>{secondsRight}</div>
		</div>
	)
}
