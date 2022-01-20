import BaseButton from "./BaseButton";
import { useState } from "react";

export default function RoomGameStartButton(props: any) {
	const members = props.members;
	const startGame = props.startGame;

	const handleClick = () => {
		setIsModalOpen(true);
		// startGame(true);
	}
	// モーダル表示のみなので、できればCSSで行いたいが
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleStart = (e: any) => {
		e.preventDefault();
		startGame(true);
	}
	const handleCancel = (e: any) => {
		e.preventDefault();
		setIsModalOpen(false);
	}
	if (members.length >= 4) {
		return (
			<div>
				<BaseButton text="Start!" onClick={handleClick} />

				<div id="start-modal" className={`
					${isModalOpen ? 'block' : 'hidden'}
					animate-fade-in
					transition-opacity
					duration-500
					fixed
					top-0
					left-0
					bg-gray-200
					bg-opacity-60
				`}>
					<div className="w-screen h-screen flex flex-col justify-center">
						<div className="grid gap-4">
							<h4 className="text-center">Start Game?</h4>
							<div className="grid grid-cols-2 gap-4">
								<BaseButton text="Yes" onClick={handleStart} />
								<BaseButton text="No" onClick={handleCancel}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		// TODO: what should I return?
		return <div></div>;
	}
}