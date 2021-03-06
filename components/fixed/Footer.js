import Link from 'next/link'


const Footer = () => {
    const date = new Date()
    const currenYear = date.getFullYear()
    return (
      <footer>
        <p>Copyright &copy; Choouse {currenYear}</p>
        <ul>
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