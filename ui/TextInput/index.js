import Label from '../Label'
import Search from '@/components/Icons/Search'

const TextInput = ({ label, placeholder, type, isRequired }) => {
  return (
    <>
      <Label isRequired={isRequired}>{label}</Label>
      <input
        className="bg-white text-black text-xs border rounded-md h-8 p-2 placeholder:text-slate-400 placeholder:text-xs focus:outline-none focus:border-sky-500"
        placeholder={placeholder}
        type={type}
      />
    </>
  )
}

export default TextInput
