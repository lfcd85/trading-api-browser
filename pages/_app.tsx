import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SideMenu } from '~/components/organisms/SideMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SideMenu />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
