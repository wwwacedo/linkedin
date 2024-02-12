import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import colors from '../../theme/colors.js'

export default function Input({ addItem }) {
	const inputElement = useRef();
	const [makeSpin, setMakeSpin] = useState(false);

	function handleOnClick(text) {
		if (!inputElement.current.value) {
			alert('Please enter a value');
			return;
		}
		addItem(inputElement.current.value);
		inputElement.current.value = '';
		setMakeSpin(true);
		const timer = setTimeout(() => {
			setMakeSpin(false);
		}, 200);
		return () => clearTimeout(timer);
	}

	return (
		<>
			<div className='top'>
				<input
					type="text"
					placeholder="Add a new item..."
					maxLength={40}
					ref={inputElement}
					onKeyDown={(e) => e.key === 'Enter' && handleOnClick()}
				/>
				<span
					className={`plus ${makeSpin ? 'spin' : ''}`}
					onClick={handleOnClick}
				><FontAwesomeIcon icon={faPlus} /></span>
			</div>
			<style jsx>{`
			.top {
				width: 550px;
				padding: 1.5rem;
				display: flex;
				gap: 1rem;
				align-items: center;
				justify-content: center;
				border-radius: 0.5rem;
				background-color: ${colors.smoothGray};
			}
			.top input {
				outline: 1px solid ${colors.blue};
				background-color: ${colors.gray};
				color: ${colors.white};
				border-radius: 0.25rem;
				width: 100%;
				min-height: 60px;
				padding: 0 20px;
				font-size: 24px;
				border: none;
				border-bottom: 1px solid ${colors.gray};
			}
			@keyframes spin {
  				0% { transform: rotate(0deg); }
  				100% { transform: rotate(360deg); }
			}
			.plus {
				color: ${colors.white};
				cursor: pointer;
				transition: all 0.3s;
				font-size: 30px;
				&:hover {
					color: ${colors.blue};
				}
			}
			.spin {
				animation: spin .4s linear infinite;
				color: ${colors.blue};
			}
		`}</style>
		</>
	)
}
