import { useState } from "react"

const WRAPPER = {
	display: 'flex',
	alighItens: 'center',
	justifyContent: 'center',
	gap: '1rem'
}

const INPUT = {
	width: '120px',
	height: '40px',
	padding: '0 1rem',
	borderRadius: '5px',
	border: '1px solid #0079FF',
	fontSize: '1.5rem',
	color: '#0079FF'
}

export default function Input({ handleOnChange }) {
	const [timeInput, setTimeInput] = useState('00:00');

	function formatter(time) {
		const [min, seg] = time.split(':');
		return Number(min) * 60 + Number(seg);
	}
	
	function handleOnChangeInput(e) {
		setTimeInput(e.target.value);
		handleOnChange(formatter(e.target.value));
	}

	return (
		<div style={WRAPPER}>
			<input
				style={INPUT}
				type="time"
				step="0"
				min="00:00"
				value={timeInput}
				onChange={e => handleOnChangeInput(e)}
			/>
		</div>
	)
}
