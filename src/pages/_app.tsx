import { ChakraProvider, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW={1180}>
        <Component {...pageProps} />  
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
