import Link from "next/link"
import styles from "../styles/Footer.module.css"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}> {/*combino las dos clases */}
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/nosotros">Nosotros</Link>
                </nav>

                <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
