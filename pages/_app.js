import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/navbar'



function MyApp({ Component, pageProps }) {
   return (
    <ChakraProvider>
      <header>
      <title>Portfolio</title>
      </header>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
