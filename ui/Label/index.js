const Label = ({ children, className, isImportant = true }) => {
  return (
    <div>
      <label className="text-black font-semibold text-xs mb-2">
        {children}
      </label>
      {isImportant && <span className="text-red-600"> *</span>}
    </div>
  )
}

export default Label
