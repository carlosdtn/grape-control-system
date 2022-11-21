import LogoFrame from 'ui/LogoFrame'
import NameTag from 'ui/NameTag'
import Dropdown from '@/components/Dropdown'
import { useState } from 'react'

const AppBar = ({ children, name }) => {
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <>
      <header className="flex items-center backdrop-blur-lg bg-white/30 w-full h-15 border-b border-slate-500 border-opacity-20 sticky top-0 z-20">
        <div className="flex items-center justify-between w-full h-12 mx-5">
          <LogoFrame />
          <NameTag name={name} onClick={() => setOpen(!open)} />
        </div>
      </header>
      <Dropdown open={open} setOpen={setOpen} className="z-10"></Dropdown>
      {children}
    </>
  )
}

export default AppBar
