import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { Button } from 'semantic-ui-react'
import logo from "../../public/img/svg/choouseDark.svg"
import Image from "next/image";




//HEader component

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="">
            <Image
              src={logo}
              width={150}
              layout="intrinsic"
              
            />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/account/login">
                <Button primary>Login</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header