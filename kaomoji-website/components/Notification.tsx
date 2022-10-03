// import { useRef, useState, useEffect } from 'react'
// import {createPortal} from 'react-dom'

interface Props {
  className?: string,
  children?: React.ReactNode,
  selector: string,
  onClose: () => void
}

function Notification({className, children, selector, onClose}: Props) {
  return <div></div>;
//   const ref = useRef()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     ref.current = document.querySelector(selector)
//     setMounted(true);
//   });

//   const html = <div
//   onClick={() => onClose} 
//   className='fixed cursor-pointer bottom-[1.5em] right-[1.5em] bg-green-100 text-green-800'>
//     copied
//     <button 
//   onClick={() => onClose} 
//   >clickme</button>
//   </div>;

//  return false ? createPortal(html, ref.current) : html
}

export default Notification