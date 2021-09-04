import Link from "next/link";
import { Button } from "semantic-ui-react";
import logo from "../../public/img/svg/choouseDark.svg";
import Image from "next/image";

//HEader component

const Header = () => {
  return (
    <div className="mx-auto px-2 bg-white">
      <div className="flex justify-between">
        <div className="flex space-x-40">
          {/* Webssite logo */}
          <div>
            <a href="#" className="flex items-center px-2 py-4">
              <Image layout='intrinsic' src={logo} alt="Logo" class="h-8 w-8 mr-2" />
            </a>
          </div>

          {/* Menu items */}
          <div class="hidden md:flex items-center space-x-12">
            <a
              href=""
              class="py-4 px-2 hover:text-blue-500 border-b-4 font-medium "
            >
              Home
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-medium hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-medium hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-medium hover:text-blue-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Secondary Navbar items */}
          <div class="hidden md:flex items-center">
            <a class="py-2 px-8 font-medium bg-black border-2 text-white rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
              <Link href="/account/login">Log In</Link>
            </a>
          </div>
        </div>
      </div>
    </div>

    // <header className={styles.header}>
    //   <div className={styles.logo}>
    //     <Link href="/">
    //       <Image src={logo} width={150} layout="intrinsic" />
    //     </Link>
    //   </div>

    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/account/login">
    //           <a>About</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;
