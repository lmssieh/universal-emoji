import Link from "next/link";
import { useMemo } from "react";

interface Props {
	className?: string;
}

function Header({ className }: Props) {
	return (
		<header className={`${className || ""} bg-pink-200 font-poppins`}>
			<div className="max-w-[1200px] m-auto px-2">
				<nav className="py-4 flex justify-between items-center">
					<h1 className="font-bold text-xl md:text-5xl">Kaomoji</h1>
					<ul className="flex items-center gap-4">
						<li className="underline cursor-pointer ">
							{/* <Link href="/about">about ↗︎</Link> */}
							<a
								href="https://greasyfork.org/en/scripts/452192-universal-emoji-kaomoji"
								target="_blank"
								rel="noreferrer"
							>
								userscript ↗︎
							</a>
						</li>
						<li className="underline cursor-pointer">
							<a
								href="https://github.com/lmssieh/universal-emoji"
								target="_blank"
								rel="noreferrer"
							>
								github ↗︎
							</a>
						</li>
					</ul>
				</nav>
				<p className="pt-10 pb-20 text-3xl md:(leading-[1.5] text-size-[4em])">
					<span className="block py-2  font-bold">(ꈍ⌓ꈍ✿)</span>
					<span className="block py-2 font-bold">
						Copy {"&"} Paste kaomojis
					</span>
				</p>
			</div>
		</header>
	);
}

export default Header;
