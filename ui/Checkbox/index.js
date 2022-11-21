const Checkbox = ({ checked, onChange, label, className }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`w-5 h-5 accent-blue-600 ${className}`}
      />
      <label className="ml-2 text-xs font-semibold text-black">{label}</label>
    </div>
  )
}

export default Checkbox
