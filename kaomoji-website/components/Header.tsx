import Link from "next/link";


interface Props {
  className?: string;
}

function Header({className}: Props) { 


  return <header className={`${className || ''} bg-pink-200`}>
    <div className="max-w-[1200px] m-auto px-2">
      <nav className="py-4 flex justify-between items-center font-mono ">
        <h1 className="font-bold text-5xl">Kaomoji</h1>
        <ul className="flex items-center gap-4">
          <li className="underline cursor-pointer ">
            <Link href="/about">about ↗︎</Link>
          </li>
        </ul>
      </nav>
      <p className="pt-10 pb-20 leading-[1.5] text-size-[4em]">
        {/* <span className="block py-2  font-bold">(′ꈍωꈍ‵)</span>
        <span className="block py-2  font-bold">ᕦ(ò_óˇ)</span>
        <span className="block py-2  font-bold">( ◕◡◕)っ ♡</span> */}
        <span className="block py-2  font-bold">(ꈍ⌓ꈍ✿)</span>
        <span className="block py-2 font-bold">Copy {'&'} Paste kaomojis</span>
      </p>
    </div>
  </header>
}


export default Header