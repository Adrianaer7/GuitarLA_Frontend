import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = ({guitarra}) => {

    const router = useRouter()

    return (
        <header className={styles.header}> {/*este estilo viene del header.module */}
            <div className="contenedor"> {/*contenedor le da el ancho y la centra a la pagina. Como está en el archivo global.css no hace falta abrir {} */}
                <div className={styles.barra}>
                    {/*dentro de Link no puedo colocar Image porque sale error en consola, por eso le pongo un <a>. Priority para que no salga error en consola*/}
                    <Link href="/"> 
                        <a><Image src="/img/logo.svg" priority="true" height={100} width={400} alt="Logo Imagen"/></a>  
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/tienda">Tienda</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/carrito">
                            <a>
                                <Image
                                    layout="fixed"
                                    width={30}
                                    height={25}
                                    src="/img/carrito.png"
                                    alt="Imagen carrito"
                                />
                            </a>
                        </Link>
                    </nav>
                </div>

                {/*muestra la info de la guitarra en el header */}
                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>{guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>Ver producto</a>
                        </Link>
                    </div>
                )}
            </div>

            {router.pathname === "/" && (
                <div className={styles.guitarra}>
                    <Image src="/img/header_guitarra.png" alt="imagen header guitarra" height={1200} width={500} layout="fixed"/>
                </div>
            )}
        </header>
    )
}

export default Header
