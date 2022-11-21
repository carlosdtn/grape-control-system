import { useRouter } from 'next/router'
import { gotoHome } from 'utils/functions'
import Logo from '@/components/Icons/Logo'

const LogoFrame = () => {
  const router = useRouter()

  return (
    <div
      className="flex items-center cursor-pointer select-none"
      onClick={() => gotoHome(router)}
    >
      <Logo className="fill-green-600 w-7 h-7" />
      <span className="text-indigo-900 font-bold">Grape</span>
      <span className="text-indigo-400 font-bold">Parcel</span>
    </div>
  )
}

export default LogoFrame
