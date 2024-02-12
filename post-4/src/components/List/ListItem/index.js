import Modal from './Modal';
import colors from '../../../theme/colors.js';
import { useContext } from 'react';

import { ListContext } from '../index.js';

export default function ListItem({ item }) {

	const { setClicked } = useContext(ListContext)

	return (
		<>
			<li onClick={() => setClicked(item.id)}>
				<span>{item.id}.</span>
				{item.text}
			</li>
			<Modal
				item={item}
			/>
			<style jsx>{`
			li {
				display: flex;
				align-items: center;
				margin: 1rem;
				padding: 1rem;
				min-width: 250px;
				min-height: 60px;
				border: 1px solid ${colors.blue};
				border-radius: 0.25rem;
				cursor: pointer;
				text-align: center;
				transition: all 0.3s;
				&:hover {
					background-color: ${colors.whiteSmoke};
					color: ${colors.gray};
					font-weight: 700;
					border: 1px solid ${colors.lightGray};
				}
				&:hover span {
					color: ${colors.blue};
				}
			}
			li span {
				margin-right: 1rem;
				font-size: 1.1rem;
				font-weight: 700;
			}
		
		`}</style>
		</>
	)
}
