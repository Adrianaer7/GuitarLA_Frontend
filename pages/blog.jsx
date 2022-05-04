import Layout from '../components/Layout'
import ListadoBlogs from '../components/ListadoBlogs'

const Blog = ({entradas}) => {  //importo el return del getServerSideProps
    
    return (
        <Layout
            pagina="Blog virtual"
        >
            <main className='contenedor'>
                <ListadoBlogs
                    entradas={entradas}
                />
            </main>
        </Layout>
    )
}

//se usa getServerSideProps cuando los datos pueden ir cambiando. Va a la API y construye una respuesta. Al usar export, puedo importar esta funcion o los datos de esta funcion en la funcion de arriba. Este tipo de funciones solo se ejecutan en paginas, no en componentes.
//se usa getStaticProps cuando se construye el proyecto con npm run build, va la API, construye un archivo estatico html y la siguiente vez que visite el sitio va a leer siempre ese archivo. Reutiliza el archivo en vez de ir a la API y construir una respuesta cada vez que se visite.
export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`   //tengo que iniciar el servidor de strapi para que me devuelva el resultado. La api_url viene de .env.local. Al final de la url puedo ordenar los resultados con los campos que tengo segun quiera
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    //me devuelve el return en la consola de next
    return {
        props: {
            entradas    //contiene cada publicacion del blog
        }
    }
}

export default Blog
