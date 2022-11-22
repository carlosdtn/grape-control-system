import RegisterBook from '@/components/Icons/RegisterBook'
import TextInput from 'ui/TextInput'
import Button from 'ui/Button'
import { screenSizes } from 'utils/constants'
import Link from 'next/link'

const Register = () => {
  return (
    <main className="grid h-screen self-center place-items-center">
      <div
        className={`bg-white rounded-md h-auto self-center p-5 ${screenSizes}`}
      >
        <div className="flex justify-center">
          <div className="flex">
            <div className="bg-green-100 rounded-full h-6 w-6 flex justify-center items-center">
              <RegisterBook className="fill-green-600" />
            </div>
            <span className="ml-2 text-black font-bold">Registrarse</span>
          </div>
        </div>
        <p className="text-slate-600 text-sm mt-4">
          Conviértete en colaborador de la aplicación — Disfruta del servicio de
          escaneo de calidad de uvas.
        </p>
        <div className="border-b border-slate-400 opacity-40 my-3"></div>
        <form action="" className="flex flex-col">
          <div className="flex flex-col">
            <TextInput
              label="Identificación de puesto"
              type="password"
              placeholder="A-12345678"
            />
          </div>
          <div className="flex flex-col mt-2">
            <TextInput
              label="Email"
              type="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="flex flex-col mt-2">
            <TextInput
              label="Crear una contraseña"
              type="password"
              placeholder="Al menos 8 caracteres"
            />
          </div>
          <div className="flex flex-col mt-4">
            <Button isLinked={false}>Convertirse en colaborador</Button>
          </div>
        </form>
        <div className="border-b border-slate-400 opacity-40 my-4"></div>
        <div className="flex text-xs justify-center">
          <span className="text-black text-md">¿Ya tienes una cuenta?</span>
          <Link href="/login" legacyBehavior>
            <a className="text-blue-500 font-semibold pl-1 hover:underline">
              Inicia sesión
            </a>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Register
