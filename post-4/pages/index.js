import { useState } from 'react';
import List from '../src/components/List'

const languages = [
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
	}
];

export default function Home() {
	const [data, setData] = useState(languages);

	return (
		<List
			title='List'
			data={data}
			setData={setData}
		/>
	)
}