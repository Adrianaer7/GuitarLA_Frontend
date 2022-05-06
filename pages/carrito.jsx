import Image from "next/image"
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import styles from "../styles/Carrito.module.css"

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)  //con el reduce recorro los productos del carrito y al total del state le acumulo

    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout pagina="Carrito de compras">
        <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
              <h2>Articulos</h2>
              {carrito.length === 0 ? "Carrito vacío" : (
                carrito.map(producto => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select  //traigo el select de [url]
                          className={styles.select}
                          value={producto.cantidad}    //por defecto dejo el select con lo que hay en el state
                          onChange={e => actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id
                          })}
                      >
                          <option value="1">1 unidad</option>
                          <option value="2">2 unidades</option>
                          <option value="3">3 unidades</option>
                          <option value="4">4 unidades</option>
                          <option value="5">5 unidades</option>
                          <option value="6">6 unidades</option>
                          <option value="7">7 unidades</option>
                          <option value="8">8 unidades</option>
                          <option value="9">9 unidades</option>
                          <option value="10">10 unidades</option>
                        </select>
                      </div>
                      <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                      <p className={styles.subtotal}>Subtotal:  $<span>{producto.precio * producto.cantidad}</span></p>
                    </div>
                    <button
                      type="button"
                      className={styles.eliminar}
                      onClick={e => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className={styles.resumen}>
                <h3>Resumen del pedido</h3>

                {total > 0 ? (
                  <>
                    <p>Total a pagar: ${total}</p>
                  </>
                ) : <p>No hay articulos en el carrito</p>}
            </div>
        </main>
    </Layout>
  )
}

export default Carrito