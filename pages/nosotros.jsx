import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"
const Nosotros = () => {
    return (
        <Layout
            pagina="Nosotros"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/> {/*responsive agranda y achica la imagen en y,x dependiendo el tamaño de pantalla, sin deformar la imagen */}

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo harum nam accusamus ex totam excepturi, fuga laborum ratione eaque odio ab aliquam quod porro, quia temporibus voluptatem eius quisquam?
                        Inventore iste, quasi a animi veniam, accusamus iusto non reiciendis nisi tempora dicta magni! At, tempore, eius autem odio doloremque suscipit distinctio voluptatibus, amet id nam nobis numquam perspiciatis ipsa.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo harum nam accusamus ex totam excepturi, fuga laborum ratione eaque odio ab aliquam quod porro, quia temporibus voluptatem eius quisquam?
                        Inventore iste, quasi a animi veniam, accusamus iusto non reiciendis nisi tempora dicta magni! At, tempore, eius autem odio doloremque suscipit distinctio voluptatibus, amet id nam nobis numquam perspiciatis ipsa.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
