import Search from '@/components/Icons/Search'

const SearchInput = ({ label, placeholder }) => {
  return (
    <div className="relative flex w-full">
      <Search className="absolute top-2 left-2 fill-slate-500" />
      <input
        className="flex w-full pl-7 bg-white text-black text-xs border rounded-md h-8 p-2 placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-sky-500"
        placeholder={placeholder}
        type="input"
      />
    </div>
  )
}

export default SearchInput
