import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  const agregarCarrito = producto => {
    setCarrito([...carrito, producto])
  }

  return <Component 
    {...pageProps} 
    carrito={carrito} 
    agregarCarrito={agregarCarrito}
  />  //por aca puedo hacer disponibles las funciones y states que yo quiera a los demas componentes
}

export default MyApp
