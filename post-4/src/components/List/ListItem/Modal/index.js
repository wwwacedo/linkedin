import { useState, useContext } from "react";
import colors from "../../../../theme/colors.js";

import { HomeContext } from '../../../../../pages/index.js';
import { ListContext } from "../../index.js";

export default function Modal({ item }) {

	const { data, setData } = useContext(HomeContext);
	const { clicked, setClicked } = useContext(ListContext);

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

	if (clicked === item.id) {
		return (
			<>
				<div className="background">
					<div className="modal">
						<h3 className="title">Change layer {item.id}:</h3>
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
					<div className={`modal showSaved`}>
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
    				background-color: ${colors.black50};
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
				.showSaved {
					display: ${saved ? 'flex' : 'none'};
					align-items: center;
					justify-content: center;
				}
				input {
					padding: 1rem 0.5rem;
					border: 1px solid ${colors.lightGray};
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
					background-color: ${colors.blue};
					color: white;
					cursor: pointer;
					width: 50%;
				}
				.save {
					background-color: ${colors.green};
				}
				.close {
					background-color: ${colors.red};
				}
			`}</style>
			</>
		)
	}
}
