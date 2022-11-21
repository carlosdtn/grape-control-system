import { useEffect } from 'react'
import router from 'next/router'

const Dropdown = ({ children, open, className, setOpen }) => {
  const styles = {
    not_style:
      'flex flex-row w-2/6 md:w-full justify-center items-center px-4 py-2 mt-2 text-xs font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b cursor-pointer hover:bg-opacity-60',
    def_style:
      'flex w-2/6 md:w-full justify-center px-4 py-2 mt-2 text-xs font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b cursor-pointer hover:bg-opacity-60',
    end_style:
      'flex w-2/6 md:w-full justify-center px-4 py-2 mt-2 text-xs font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 transition ease-in duration-200 group hover:bg-red-200 hover:text-red-600 hover:bg-opacity-60'
  }

  // const handleClickOutside = (e) => {
  //   if (open) {
  //     if (!e.target.closest('.dropdown')) {
  //       setOpen(true)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [open])

  return (
    <div
      id="dropdown"
      className={`fixed right-0 md:right-[1vmax] md:top-[3rem] w-full shadow-lg md:w-36 ${
        !open && 'hidden'
      } ${className}`}
    >
      <div className="flex flex-col items-center px-2 py-2 backdrop-blur-lg bg-white/30 rounded-sm shadow text-sm">
        {children}
        <button className={styles['not_style']}>Configuración</button>
        {/* <button className={styles['def_style']}>Lista de favoritos</button> */}
        <button
          className={styles['end_style']}
          onClick={() => {
            // window.localStorage.removeItem('user')
            router.push('/login')
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default Dropdown
