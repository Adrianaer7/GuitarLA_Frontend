import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? []
    setCarrito(carritoLS)
  }, [])

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = producto => {  //obtengo el producto al hacer click en el boton agregar al carrito en [url]
    if(carrito.some(articulo => articulo.id === producto.id)) { //recorre todos y devuelve un true en caso que encuentre uno
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id) { //detecta cual es el duplicado
          articulo.cantidad = producto.cantidad
        }
        return articulo //devuelvo el articulo con la cantidad actualizada
      })
      setCarrito(carritoActualizado)  //agrego el articulo con la cantidad actualizada al state
    }

    setCarrito([...carrito, producto])
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id === producto.id) { //detecta cual es el duplicado
        articulo.cantidad = producto.cantidad
      }
      return articulo //devuelvo el articulo con la cantidad actualizada
    })
    setCarrito(carritoActualizado)  //agrego el articulo con la cantidad actualizada al state
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }


  return <Component //por aca puedo hacer disponibles las funciones y states que yo quiera a los demas componentes
    {...pageProps} 
    carrito={carrito} 
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />  
}

export default MyApp
