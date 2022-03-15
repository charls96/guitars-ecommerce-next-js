import Head from "next/head"

const Layout = ({children, page}) => {
  return (
    <div>
       <Head>
           <title>GuitarStore - {page}</title>
           <meta name="description" content="Web page for selling guitars" />
       </Head>
        {children}
    </div>
  )
}

export default Layout