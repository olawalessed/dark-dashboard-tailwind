import Head from 'next/head'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const Layout = ({children, title, keyword, description}) => {

  const{user} = useContext(AuthContext)
    const router = useRouter()
  const paths =
    {
    home: "/",
    login: "/account/login",
      
    }
    return (
      <div>

        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keyword} />
        </Head>
        {/* {router.pathname === "/dashboard" && <DashHeader />} */}
        <div>{children}</div>
      </div>
    );
}

export default Layout