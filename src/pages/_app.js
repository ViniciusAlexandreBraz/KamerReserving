import '@/styles/globals.css'
import Cabecalho from '@/components/cabecalho'

export default function App({ Component, pageProps }) {
 

  return (
    <>
   <Cabecalho/>
   <Component {...pageProps} />
  </>
  )
  
  
 
  
}
