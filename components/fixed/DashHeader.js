import Link from "next/link";
import styles from "@/styles/DashHeader.module.css"
import { Icon, Menu } from "semantic-ui-react";
import logo from '../../public/img/svg/choouse.svg'
import Image from 'next/image'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="">
          <Image src={logo} />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <Icon name="search" />
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <Icon name="bell outline" />
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <div className={styles.imgSpan}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  width="25px"
                  height="25px"
                />
                <p className={styles.pan}>
                  <span>Benard Jovita</span> <br />
                  <span>Admin</span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
