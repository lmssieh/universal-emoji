interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
function SearchInput({value, onChange, className}: Props) {
  
  return (<div className={`${className || ''} transform translate-y-[-50%] w-full text-mono`}>
    <div className="max-w-[700px] m-auto ">
    <input
    placeholder="Search..."
    type="text"
    className="w-full text-[inherit] text-mono py-4 px-5 outline-none border-1 rounded-full shadow-md focus:outline-black"
    value={value}
    onChange={({target}) => onChange(target.value)} />
    </div>
  </div>)

}

export default SearchInput;