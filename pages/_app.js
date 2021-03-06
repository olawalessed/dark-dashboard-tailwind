// import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import AuthContext, { AuthProvider } from '@/context/AuthContext'

function MyApp({ Component, pageProps }) {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
}

export default MyApp