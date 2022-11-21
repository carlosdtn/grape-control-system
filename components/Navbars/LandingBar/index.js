import LogoFrame from 'ui/LogoFrame'

const LandingBar = ({ children }) => {
  return (
    <>
      <header className="flex items-center backdrop-blur-3xl bg-white fixed w-full h-15 border-b border-slate-500 border-opacity-20">
        <div className="flex items-center justify-between w-full h-12 mx-5">
          <LogoFrame />
          <nav className="text-black">
            <ul className="flex flex-row space-x-3 font-medium">
              <li>Inicio</li>
              <li>¿Cómo funciona?</li>
              <li>Nosotros</li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </>
  )
}

export default LandingBar
