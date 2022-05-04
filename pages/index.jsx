import Curso from "../components/Curso"
import Layout from "../components/Layout"
import ListadoBlogs from "../components/ListadoBlogs"
import Listado from "../components/ListadoGuitarras"


const Home = ({guitarras, curso, entradas}) => {

  return (
    <Layout
      pagina="Inicio"
      guitarra={guitarras[3]} //Elijo la 4ta guitarra. Solo el index va a mostrar la guitarra en el header
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado
          guitarras={guitarras}
        />  
      </main>
      
      <Curso
        curso={curso}
      />
      <section className="contenedor">
        <ListadoBlogs
          entradas={entradas}
        />
      </section>
     
    </Layout>
  )
}

//utilizo el promises para hacer mas de una consulta a la vez
export async function getServerSideProps()  {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCurso, resBlogs] = await Promise.all([fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog)])
  const [guitarras, curso, entradas] = await Promise.all([resGuitarras.json(), resCurso.json(), resBlogs.json()])
  return {
     props: {
      guitarras,
      curso,
      entradas
     } 
  }
}

export default Home
