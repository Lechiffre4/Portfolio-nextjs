import '../styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Nav from '../components/navbar'
import Head from 'next/head'
import "../styles/globals.css"



function MyApp({ Component, pageProps }) {


   return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
