import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({children, title, keyword, description}) => {

    const router = useRouter()

    return (
        <div>
            
            <Head>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css' />
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keyword} />
            </Head>

            <Header />
            <div className={styles.container}>
            {children}
            </div>

            <Footer />
            
        </div>
    )
}

export default Layout