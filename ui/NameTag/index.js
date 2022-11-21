const NameTag = ({ name, onClick }) => {
  const getFirstLetter = (name) => {
    return name.charAt(0).toUpperCase()
  }

  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-3 p-1 rounded hover:bg-indigo-200 hover:bg-opacity-50 transition duration-300 cursor-pointer select-none"
    >
      <div className="flex flex-col text-slate-900 font-medium text-sm">
        <p>
          Hola, <span className="text-green-600">{name}</span>
        </p>
      </div>
      <div className="flex bg-indigo-700 rounded-full w-7 h-7 items-center justify-center select-none">
        <span className="font-semibold text-white">{getFirstLetter(name)}</span>
      </div>
    </div>
  )
}

export default NameTag
