import { useState } from 'react';
import List from '../src/components/List'

const languages = [
	{
		id: 1,
		text: 'John Doe',
	},
	{
		id: 2,
		text: 'Jane Doe',
	},
	{
		id: 3,
		text: 'John Smith',
	}
];

export default function Home() {
	const [data, setData] = useState(languages);

	return (
		<List
			title='Names'
			data={data}
			setData={setData}
		/>
	)
}