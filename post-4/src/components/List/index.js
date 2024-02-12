import { useState, createContext } from 'react';
import ListItem from './ListItem';
import colors from '../../theme/colors.js'

export const ListContext = createContext();

export default function List(props) {
	const { title, data } = props;
	const [clicked, setClicked] = useState(0);

	return (
		<div>
			<h1 className='title'>{title}</h1>
			<ListContext.Provider value={{ clicked, setClicked }}>
				<ul>
					{data.map(item => (
						<ListItem
							key={item.id}
							item={item}
						/>
					))}
				</ul>
			</ListContext.Provider>
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
