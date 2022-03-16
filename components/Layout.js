import Head from "next/head"
import Header from "./Header"

const Layout = ({children, page}) => {
  return (
    <div>
       <Head>
           <title>GuitarStore - {page}</title>
           <meta name="description" content="Web page for selling guitars" />
       </Head>

       <Header>
           
       </Header>
        {children}
    </div>
  )
}

export default Layout