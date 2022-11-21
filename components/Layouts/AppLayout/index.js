import AppBar from 'components/Navbars/AppBar'

const AppLayout = ({ children }) => {
  return (
    <>
      <AppBar name="Carlos">
        <div className="flex bg-gray-100 justify-center items-start h-full content-main">
          {children}
        </div>
      </AppBar>
    </>
  )
}

export default AppLayout
