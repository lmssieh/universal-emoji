// import { useRef, useState, useEffect } from 'react'
// import {createPortal} from 'react-dom'

import { useEffect } from "react";

interface Props {
	className?: string;
	onClose: () => void;
}

function Notification({ className, onClose }: Props) {
	useEffect(() => {
		const timeout = setTimeout(onClose, 2000);

		return () => clearTimeout(timeout);
	});
	return (
		<div
			onClick={onClose}
			className={`${
				className || " "
			} fixed bottom-5 right-5 p-3  text-xl rounded font-poppins bg-green-100 text-green-500 cursor-pointer"`}
		>
			copied!
		</div>
	);
}

export default Notification;
