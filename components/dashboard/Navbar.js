import avatar from '../../public/static/avatar-1.jpg'
import Image from 'next/image'
import { Icon } from 'semantic-ui-react'


export default function Navbar() {
    return (
      <div className="flex justify-between space-x-4 items-center">
        <div className="flex flex-1 max-w-xl py-4">
          <input
            className="w-full items-center h-10 text-sm font-normal tracking-wider text-white placeholder-grey-800 px-4 rounded-lg bg-gray-800 focus-within:outline-none focus:ring-2 focus:ring-orange"
            type="text"
            placeholder="Search..."
          />
          <Icon name="search" size="small" className="relative inset-y-0 self-center right-7 text-gray-700 focus:text-gray-200" />
        </div>
        <div className="flex justify-self-end items-center">
          <Image
            src={avatar}
            width={35}
            height={35}
            layout="intrinsic"
            alt=""
            className="rounded-full"
          />
          <a href="#" className="inline-flex items-center space-x-1 px-3 pl-4">
            <span className="text-xs text-gray-300 font-normal tracking-widest">Thomas</span>
            <Icon name="chevron down" className="text-gray-500" size="small" />
          </a>
          <button className="relative">
            <Icon name="bell outline" className="text-gray-500" />
            <span className="w-2 h-2 bg-red-500 rounded-full absolute right-1 top-0 border border-white"></span>

          </button>
        </div>
        
      </div>
    );
}

