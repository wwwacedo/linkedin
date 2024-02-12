import { useState, createContext } from 'react';
import ListItem from './ListItem';
import colors from '../../theme/colors.js'

export const ListContext = createContext();

export default function List({ data }) {
	const [clicked, setClicked] = useState(0);

	return (
		<div>
			<ListContext.Provider value={{ clicked, setClicked }}>
				{
					data.length > 0 &&
					<ul>
						{data.map((item) => (
							<ListItem
								key={item.id}
								item={item}
							/>
						))}
					</ul>
				}

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
				width: 100%;
			}
			ul {
				list-style: none;
				width: 550px;
				padding: 5px 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 0.5rem;
			}
		
		`}</style>
		</div>
	)
}
