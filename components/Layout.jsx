/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"


const Layout = ({children, pagina, guitarra}) => {    //importo el titulo de cada pagina
    return (
       <div>
           <Head>
                <title>GitarLA - {pagina}</title>
                <meta name="description" content="Sitio web de venta de guitarras"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
           </Head>

           <Header
                guitarra={guitarra}
           />
           {children}   {/*children toma todo el html que le paso desde otro componente */}
           <Footer/>
       </div>
    )
}

//Le paso a los demas componentes este prop
Layout.defaultProps = {
    guitarra: null
}

export default Layout