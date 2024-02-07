import Modal from '../../Modal';

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
				min-width: 200px;
				min-height: 60px;
				border: 1px solid #0079FF;
				border-radius: 0.25rem;
				cursor: pointer;
				text-align: center;
				transition: all 0.3s;
				&:hover {
					background-color: #f9f9f9;
					color: #242424;
					font-weight: 700;
					border: 1px solid #ddd;
				}
				&:hover span {
					color: #0079FF;
				}
			}
			li span {
				color: #F12E5E;
				margin-right: 1rem;
				font-size: 1.1rem;
				font-weight: 700;
			}
		
		`}</style>
		</>
	)
}
