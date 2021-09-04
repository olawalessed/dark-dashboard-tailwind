import Link from "next/link";
import { Button, Icon, Menu } from "semantic-ui-react";
import logo from '../../public/img/svg/choouse.svg'
import Image from 'next/image'
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";


const Header = ({req}) => {

  const { user, logout,  token } = useContext(AuthContext)
  const router = useRouter()
  

  const handleClick = e => {
    e.preventDefault()

    logout()
  }
  return (
    <>
      <header>
        <div>
          <Link href="#">
            <a>
              <Image src={logo} layout="intrinsic" />
            </a>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="#">
                <>
                  <Icon name="search" />
                </>
              </Link>
            </li>
            <li>
              <Link href="#">
                <>
                  <Icon name="bell outline" />
                </>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <>
                  <div>
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      width="25px"
                      height="25px"
                    />
                    <p >
                      <span>{user.name}</span> <br />
                      <span>{user.account_type}</span>
                    </p>
                  </div>
                </>
              </Link>
            </li>
            <li>
              <Button secondary onClick={handleClick}>
                <Icon name="log out" size="small" />
                <a>Logout</a>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
