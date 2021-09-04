import HomeIcon from "../../public/static/icons/home.svg";
import ArrowRightIcon from "../../public/static/icons/discover.svg";
import DownloadIcon from "../../public/static/icons/friends.svg";
import PaperDownIcon from "../../public/static/icons/coin.svg";
import WalletIcon from "../../public/static/icons/mastercard.svg";
import { Icon } from "semantic-ui-react";

export default function Sidebar() {
  const sidebarMenu = [
    {
      label: "Menu",
      children: [
        { name: "Discover", icon: "home" },
        { name: "Trending", icon: "arrow right" },
        { name: "Streaming", icon: "download" },
        { name: "Playlist", icon: "play circle outline" },
        { name: "Bookmark", icon: "bookmark" },
      ],
    },
    {
      label: "Category",
      children: [
        { name: "Live Streaming", icon: "tv" },
        { name: "Tutorial", icon: "users" },
        { name: "Competition ", icon: "trophy" },
        { name: "Settings", icon: "settings" },
      ],
    },
  ];

  return (
    <div className="px-8 pt-2 -mt-10 divide-y divide-gray-700">
      <div className="py-10">
        <span className="tracking-wides text-orange uppercase text-xs">{new Date().toDateString()}</span>
        
              {sidebarMenu.map((group) => {
                  
                  return (
                    <div className="divide-y divide-gray-800 pt-2">
                      <span className="tracking-widest text-gray-500 uppercase text-xxs">
                        {group.label}
                      </span>
                      <ul className="flex flex-col pt-5 space-y-8 pb-5">
                        {group.children.map((item) => {
                          return (
                            <div className="group">
                              <li
                                key={item.name}
                                className="flex items-center
                               space-x-4"
                              >
                                <span className="rounded-2xl p-3 bg-gray-700 group-hover:bg-red-500 group-hover:text-white">
                                  <Icon name={`${item.icon}`} />
                                </span>
                                <a className="group-hover:text-white text-gray-300 text-lg">
                                  {item.name}
                                </a>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  );

                  
              })
              
              }
      </div>
    </div>
  );
}
