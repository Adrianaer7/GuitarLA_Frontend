import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/Guitarra.module.css"


const Producto = ({guitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(1)

    const {nombre, precio, imagen, descripcion} = guitarra


    const onSubmit = e => {
        e.preventDefault()

        //Agregarlo al carrito
    }

    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image layout="responsive" width={180} height={350} src={imagen.url} alt="{`Imagen guitarra ${nombre}`"/>

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={onSubmit} className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad</label>
                        <select 
                            value={cantidad}    //por defecto dejo el select con lo que hay en el state
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="" hidden>-- Seleccione --</option>
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
                        <input type="submit" value="Agregar al carrito"/>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

//como el contenido puede ir cambiando, uso esta funcion
export async function getServerSideProps({query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`   //consulto por la guitarra que tanga la url = a la url que extraigo del query
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
   
    return {
        props: {
            guitarra: guitarra[0]
        }
    }
}

export default Producto
