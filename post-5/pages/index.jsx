import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import List from '../src/components/List/index.jsx'
import Input from '../src/components/Input/index.jsx'
import Title from '../src/components/Title/index.jsx'

export const AppContext = createContext();

export default function App() {
	const [data, setData] = useState([]);

	function addItem(text) {
		const newItem = {
			id: uuidv4(),
			text: text
		}
		setData([...data, newItem])
	}

	function deleteItem(id) {
		const newData = data.filter(item => item.id !== id);
		setData(newData);
	}

	return (
		<div className='wrapper'>

			<Title>ToDo List</Title>

			<Input addItem={addItem} />

			<AppContext.Provider value={{ data, setData, deleteItem }}>
				<List />
			</AppContext.Provider>

			<style jsx>{`
			.wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 500px;
				margin: 50px auto;
			}
		`}</style>
		</div>
	)
}