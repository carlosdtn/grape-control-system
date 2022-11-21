import 'styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LANDING_PAGES, AUTH_PAGES, APP_PAGES } from 'routes/routes'
import LandingBar from '@/components/Navbars/LandingBar'
import AuthLayout from '@/components/Layouts/AuthLayout'
import AppLayout from '@/components/Layouts/AppLayout'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  // console.log(APP_PAGES[pathname])

  return (
    <>
      <Head>
        <title>InfoGrape</title>
        <meta
          name="description"
          content="Sistema de clasificación de uvas verdes."
        />
      </Head>
      {LANDING_PAGES[pathname] && (
        <>
          <Component {...pageProps} />
        </>
      )}
      {AUTH_PAGES[pathname] && (
        <>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </>
      )}
      {APP_PAGES[pathname] && (
        <>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </>
      )}
    </>
  )
}

export default MyApp
