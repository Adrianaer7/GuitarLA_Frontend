import Layout from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras'


const Tienda = ({guitarras}) => {
    return (
        <Layout
            pagina="Tienda virtual"
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra coleccion</h1>

                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=precio:asc`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
   
    return {
       props: {
        guitarras
       } 
    }
}

export default Tienda
