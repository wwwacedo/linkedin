import { useState, createContext } from 'react';
import List from '../src/components/List'

const layers = [
	{
		id: 1,
		text: '',
	},
	{
		id: 2,
		text: '',
	},
	{
		id: 3,
		text: '',
	},
	{
		id: 4,
		text: '',
	}
];

export const HomeContext = createContext();

export default function Home() {
	const [data, setData] = useState(layers);

	return (
		<HomeContext.Provider value={{ data, setData }}>
			<List
				title='TCP/IP Layers'
				data={data}
			/>
		</HomeContext.Provider>
	)
}