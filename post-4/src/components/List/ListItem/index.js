import Modal from './Modal';
import colors from '../../../theme/colors.js';

export default function ListItem(props) {
	const { item, data, setData, clicked, setClicked } = props;
	return (
		<>
			<li onClick={() => setClicked(item.id)}>
				<span>{item.id}.</span>
				{item.text}
			</li>
			<Modal
				show={clicked === item.id}
				setClicked={setClicked}
				item={item}
				data={data}
				setData={setData}
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
