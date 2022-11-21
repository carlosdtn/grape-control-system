import LandingBar from 'components/Navbars/LandingBar'

const AuthLayout = ({ children }) => {
  return (
    <>
      <LandingBar />
      <div>{children}</div>
    </>
  )
}

export default AuthLayout
