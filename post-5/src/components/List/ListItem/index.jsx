import Modal from './Modal/index.jsx';
import colors from '../../../theme/colors.js';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../../../pages/index.jsx';
import { ListContext } from '../index.jsx';

export default function ListItem({ item }) {

	const { deleteItem } = useContext(AppContext);
	const { setClicked } = useContext(ListContext);

	return (
		<>
			<li>
				<div onClick={() => setClicked(item.id)}>
					<span className='arrow'>
						<FontAwesomeIcon icon={faArrowRight} />
					</span>{item.text}
				</div>

				<span
					className='trash'
					onClick={() => deleteItem(item.id)}
				>
					<FontAwesomeIcon icon={faTrashCan} />
				</span>
			</li>

			<Modal
				item={item}
			/>

			<style jsx>{`
			li {
				display: flex;
				justify-content: space-between;
				gap: 1rem;
				align-items: center;
				width: 500px;
				margin-top: 10px;				
			}
			li div {
				display: flex;
				align-items: center;
				padding: 1rem;
				width: 100%;
				font-size: 1.2rem;
				min-height: 60px;
				height: auto;
				border: 1px solid ${colors.blue};
				border-radius: 0.25rem;
				cursor: pointer;
				transition: border 0.3s;
				&:hover {
					border: 1px solid ${colors.lightGray};
				}
				&:hover span {
					color: ${colors.blue};
				}
			}
			.arrow {
				margin-right: 1rem;
				font-size: 1.1rem;
			}

			@keyframes shake {
				0% { transform: rotate(0deg); }
				25% { transform: rotate(10deg); }
				50% { transform: rotate(-10deg); }
				75% { transform: rotate(10deg); }
				100% { transform: rotate(-10deg); }
			}

			.trash {
				color: ${colors.red};
				cursor: pointer;
				font-size: 1.5rem;
				padding-right: 4px;
				&:hover {
					animation: shake 0.5s infinite;
				}
			}
		
		`}</style>
		</>
	)
}
