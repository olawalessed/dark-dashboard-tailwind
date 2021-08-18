import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <Link href='/'>
                <h3>Choouse</h3>
            </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/dashboard'>
                            <a>Dashboard</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header