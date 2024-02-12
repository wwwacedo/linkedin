import { useState, useRef, createContext } from 'react';
import List from '../src/components/List'
import colors from '../src/theme/colors.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const HomeContext = createContext();

export default function Home() {
	const [data, setData] = useState([]);
	const [makeSpin, setMakeSpin] = useState(false);
	const inputElementOnTop = useRef();

	function handleOnClick() {
		if (!inputElementOnTop.current.value) {
			alert('Please enter a value');
			return;
		}
		addItems();
		inputElementOnTop.current.value = '';
		setMakeSpin(true);
		const timer = setTimeout(() => {
			setMakeSpin(false);
		}, 200);
		return () => clearTimeout(timer);
	}

	function addItems() {
		const newItem = {
			id: uuidv4(),
			text: inputElementOnTop.current.value
		}
		setData([...data, newItem])
	}

	function deleteItem(id) {
		const newData = data.filter(item => item.id !== id);
		setData(newData);
	}

	return (
		<div className='wrapper'>
			<h1 className="title">ToDo List</h1>
			<div className='top'>
				<input type="text"
					placeholder="Add a new item..."
					ref={inputElementOnTop}
					onKeyDown={(e) => e.key === 'Enter' && handleOnClick()}
				/>
				<span
					className={`plus ${makeSpin ? 'spin' : ''}`}
					onClick={handleOnClick}
				><FontAwesomeIcon icon={faPlus} /></span>
			</div>
			<HomeContext.Provider value={{ data, setData, deleteItem }}>
				<List data={data} />
			</HomeContext.Provider>

			<style jsx>{`
			.wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 500px;
				margin: 50px auto;
			}
			.title {
				color: ${colors.blue};
				font-size: 2.5rem;
			}
			.top {
				width: 550px;
				padding: 1rem 1.5rem;
				display: flex;
				gap: 1rem;
				/* flex-direction: column; */
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
			button {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				background-color: ${colors.blue};
				color: ${colors.gray};
				font-size: 24px;
				border: none;
				cursor: pointer;
				transition: all 0.3s;
				&:hover {
					color: ${colors.white};
				}
			}
		`}</style>
		</div>
	)
}