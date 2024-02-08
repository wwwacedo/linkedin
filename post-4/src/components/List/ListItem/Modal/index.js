import { useState } from "react";

export default function Modal(props) {
	const { show, setClicked, item, data, setData } = props;
	const [saved, setSaved] = useState(false);
	const [text, setText] = useState(item.text);

	function onSave(item) {
		setSaved(true);
		const newData = data.map(dataItem =>
			dataItem.id === item.id
				? { ...dataItem, text: text }
				: dataItem
		);
		setData(newData);
		setTimeout(() => {
			setSaved(false);
			setClicked(0);
		}, 1000);
	}

	function onClose() {
		setText(item.text);
		setClicked(0);
	}

	if (show) {
		return (
			<>
				<div className="background">
					<div className="modal">
						<h3 className="title">Change item {item.id}:</h3>
						<input
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && onSave(item)}
						/>
						<div className="buttons">
							<button
								onClick={() => onSave(item)}
								className="button save" >Save
							</button>
							<button
								onClick={onClose}
								className="button close">Close
							</button>
						</div>
					</div>
					<div className={`modal ${saved ? 'enabled' : 'disabled'}`}>
						<h1>Saved!</h1>
					</div>
				</div>
				<style jsx>{`
				.title {
					text-align: center;
				}
				.background {
					position: fixed;
    				top: 0;
    				bottom: 0;
    				left: 0;
    				right: 0;
    				background-color: rgba(0, 0, 0, 0.5);
    				z-index: 1000;
				}
				.modal {
					display: flex;
    				flex-direction: column;
					justify-content: center;
    				gap: 1rem;
    				position: fixed;
    				top: 50%;
    				left: 50%;
    				transform: translate(-50%, -50%);
    				padding: 30px;
					width: 300px;
					height: 300px;
    				background-color: white;
    				border-radius: 10px;
    				color: black;
					
				}
				.enabled {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.disabled {
					display: none;
				}
				input {
					padding: 1rem 0.5rem;
					border: 1px solid #ddd;
					border-radius: 5px;
					width: 100%;
				}
				.buttons {
        			display: flex;
					justify-content: center;
        			gap: 1rem;
        			margin-top: .5rem;
					width: 100%;
    			}
				.button {
					padding: 0.5rem 1rem;
					border: none;
					border-radius: 5px;
					background-color: #007bff;
					color: white;
					cursor: pointer;
					width: 50%;
				}
				.save {
					background-color: #28a745;
				}
				.close {
					background-color: #dc3545;
				}
			`}</style>
			</>
		)
	}
}
