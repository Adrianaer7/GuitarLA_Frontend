//Aca muestro en detalle el articulo. Este archivo es un comodin y toma la id que le pongo en la barra de direcciones. La carpeta que contiene a este archivo tiene que llamarse igual a la url que le paso en <Link></Link>
import Layout from "../../components/Layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({entrada}) => {    //traigo la entrada del getStaticProps

    const {titulo, imagen, published_at, contenido} = entrada

    return (
        <Layout
            pagina={titulo} //le paso el titulo para que apareza arriba en la pestaña
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen articulo ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
        
    )
}

//getStaticPaths va a obtener todas las rutas estaticas, en este caso las del blog y construye sus rutas. Esta funcion construye enlaces. getStaticProps trae la informacion del enlace
export async function getStaticPaths() {    
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({    //guardo la id de cada entrada
        params: { 
            url: entrada.url    //le paso el campo url que hay en el articulo
        }
    }))
    return {
        paths,
        fallback: false //false es para pocas entradas. True es para varias entradas
    }
}

//getStaticProps hace que cada pagina se construya cuando escriba npm run build. Extraigo la url del paths.
export async function getStaticProps({params : {url}}) {   
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`   //le agrego ?url= porque strapi permite esa sintaxis para las url
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    //retorno el blog con todos sus datos
    return {
        props: {
            entrada: entrada[0] //como entrada es un arreglo con 1 solo objeto, accedo a la primera posicion
        }
    }
} 

export default EntradaBlog
