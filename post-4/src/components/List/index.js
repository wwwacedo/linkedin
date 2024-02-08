import { useState } from 'react';
import ListItem from './ListItem';
import colors from '../../theme/colors.js'

export default function List(props) {
	const { title, data, setData } = props;
	const [clicked, setClicked] = useState(0);

	return (
		<div>
			<h1 className='title'>{title}</h1>
			<ul>
				{data.map(item => (
					<ListItem
						key={item.id}
						item={item}
						data={data}
						setData={setData}
						clicked={clicked}
						setClicked={setClicked}
					/>))}
			</ul>
			<style jsx>{`
			.title {
				color: ${colors.blue};
			}
			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100%;
			}
			ul {
				list-style: none;
			}
		
		`}</style>
		</div>
	)
}
