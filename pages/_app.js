import '../styles/globals.css'
import { Navbar } from "./components/Navbar"
import { Layout } from './Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
