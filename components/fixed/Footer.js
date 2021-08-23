import Link from 'next/link'
import styles from '@/styles/Footer.module.css'


const Footer = () => {
    const date = new Date()
    const currenYear = date.getFullYear()
    return (
      <footer className={styles.footer}>
        <p>Copyright &copy; Choouse {currenYear}</p>
        <ul className={styles.link}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">FAQs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </footer>
    );
}

export default Footer