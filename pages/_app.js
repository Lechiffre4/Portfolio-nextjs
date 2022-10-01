import '../styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import "../styles/globals.css"
import GoogleAnalytics from '@bradgarropy/next-google-analytics'



function MyApp({ Component, pageProps }) {


   return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <GoogleAnalytics measurementId='G-GPSFYXPZBF'/>
    </ChakraProvider>

  )
}

export default MyApp
