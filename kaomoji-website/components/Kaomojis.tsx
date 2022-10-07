import { time } from "console";
import { useEffect, useState } from "react";

interface kaomjis {
	[key: string]: string;
}

interface Props {
	data: kaomjis[];
	className?: string;
	onClick: () => void;
}

function Kaomoji({ data, className, onClick }: Props) {
	function copyToCliboard(text: string) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
			onClick();
		}
	}

	return (
		<div className={`${className || ""} max-w-[1200px] m-auto px-4`}>
			{data.length !== 0 && (
				<div className="flex flex-wrap py-4 gap-4 md:(py-8 gap-8) items-center justify-center">
					{data.map(({ name, kaomoji }) => {
						return (
							<div
								className="min-w-[100px] text-center cursor-pointer bg-pink-50 p-5 shadow hover:(shadow-lg) relative 
           rounded-md after:(content-[attr(title)] rounded bg-dark-800 text-white absolute bottom-[105%] left-[-50%] right-[-50%] mx-auto w-[fit-content] hidden text-center p-2 font-mono whitespace-nowrap hover:block)"
								key={name}
								title={name}
								onClick={({ target }) =>
									copyToCliboard((target as HTMLElement).innerText)
								}
							>
								{kaomoji}
							</div>
						);
					})}
				</div>
			)}
			{!data.length && (
				<div className="text-center py-4 leading-[1.5] text-5xl">
					<span className="font-semibold  block">(;-;)</span>
					Can’t find any kaomojis.
				</div>
			)}
		</div>
	);
}

export default Kaomoji;
