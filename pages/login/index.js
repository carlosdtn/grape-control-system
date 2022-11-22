import TextInput from 'ui/TextInput'
import Checkbox from 'ui/Checkbox'
import Button from 'ui/Button'
import Loginkey from '@/components/Icons/LoginKey'
import { screenSizes } from 'utils/constants'
import Link from 'next/link'

const Login = () => {
  return (
    <main className="grid h-screen self-center place-items-center">
      <div
        className={`bg-white rounded-md h-auto self-center p-5 ${screenSizes}`}
      >
        <div className="flex justify-center">
          <div className="flex">
            <div className="bg-green-100 rounded-full h-6 w-6 flex justify-center items-center">
              <Loginkey className="fill-green-600" />
            </div>
            <span className="ml-2 text-black font-bold">Iniciar sesión</span>
          </div>
        </div>
        <p className="text-slate-600 text-sm mt-4">
          Conviértete en colaborador de la aplicación — Disfruta del servicio de
          escaneo de calidad de uvas.
        </p>
        <div className="border-b border-slate-400 opacity-40 my-4"></div>
        <form action="" className="flex flex-col">
          <div className="flex flex-col">
            <TextInput
              label="Email"
              type="email"
              placeholder="Ingrese su email"
              isRequired={false}
            />
          </div>
          <div className="flex flex-col mt-2">
            <TextInput
              label="Contraseña"
              type="password"
              placeholder="Ingrese su contraseña"
              isRequired={false}
            />
          </div>
          <div className="my-2">
            <Checkbox label="Recordar" />
          </div>
          <div className="flex flex-col">
            <Button isLinked={false}>Iniciar sesión</Button>
          </div>
        </form>
        <div className="border-b border-slate-400 opacity-40 my-4"></div>
        <div className="flex text-xs justify-center">
          <span className="text-black text-md">¿Aún no tienes una cuenta?</span>
          <Link href="/register">
            <a className="text-blue-500 font-semibold pl-1 hover:underline">
              Regístrate
            </a>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login
