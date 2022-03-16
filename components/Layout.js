import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, page}) => {
  return (
    <div>
       <Head>
           <title>GuitarStore - {page}</title>
           <meta name="description" content="Web page for selling guitars" />
       </Head>
       <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout