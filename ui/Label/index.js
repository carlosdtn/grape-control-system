const Label = ({ children, className, isRequired }) => {
  return (
    <div>
      <label className="text-black font-semibold text-xs mb-2">
        {children}
      </label>
      {isRequired && <span className="text-red-600"> *</span>}
    </div>
  )
}

Label.defaultProps = {
  isRequired: true
}

export default Label
