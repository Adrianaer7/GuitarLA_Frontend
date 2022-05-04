
import Entrada from "./Entrada"
import styles from "../styles/Blog.module.css"

const ListadoBlogs = ({entradas}) => {
    return (
        <>
            <h2 className='heading'>Blog</h2>
            <div className={styles.blog}>
                {entradas.map(entrada => (
                    <Entrada
                        key={entrada.id} //strapi genera una id por cada entrada
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
        
    )
}

export default ListadoBlogs
