import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Hero from '../Hero'
import DashHeader from './DashHeader'
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

        {!user && router.pathname !== "/dashboard" && <Header />}

        {user && router.pathname === "/dashboard" && <DashHeader />}
        {/* {router.pathname === "/dashboard" && <DashHeader />} */}
        {router.pathname === "/" && <Hero />}

        <div className={styles.container}>{children}</div>

        <Footer />
      </div>
    );
}

export default Layout