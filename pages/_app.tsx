import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SideMenu } from '~/components/organisms/SideMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <div className="w60">
        <SideMenu />
      </div>
      <div className="ml-60">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
