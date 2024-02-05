import { useEffect, useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import Display from './components/Display'
import Button from './components/Button' 

import './App.css'

export default function App() {
	const [countdownTime, setCountdownTime] = useState(0);
	const [active, setActive] = useState(false);
	const [time, setTime] = useState(0);
	
	useEffect(() => {
		if(active) {
			setTime(countdownTime);
			countdown(countdownTime);
		}
	}, [active])

	useEffect(() => {
		console.log(countdownTime, active, time)
	}, [countdownTime, active, time])

	const countdown = (number = 0) => {
		if(typeof number !== 'number' || number < 0) {
			alert('Input must be a non-negative integer!');
			return;
		}

		setTimeout(() => {
			if(number > 0) {
				setTime(number - 1);
				return countdown(number - 1);
			}
			alert('Time is up!');
			setActive(!active);
		}, 1000)
	}


	function handleOnClick() {
		if (countdownTime > 0) {
			if(time === 0) setActive(!active);
		} else {
			alert('Enter an interval time greater than 0!');
		}
	}

	return (
		<>
			<Title>Timer JS</Title>
			<Input handleOnChange={setCountdownTime}/>
			<Display time={time}/>
			<Button
				handleOnClick={handleOnClick} 
				active={active}
			/>
		</>
	)
}
