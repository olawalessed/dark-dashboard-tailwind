import Image from "next/image";
import { Icon } from "semantic-ui-react";
import profile from "../../public/static/avatar-1.jpg"; 
import avatar from "../../public/static/bluerange.jpg";
import avatar2 from "../../public/static/avatar-2.jpg";


export default function CardSecondary() {
  return (
    <div className="flex space-x-5">
      {secondaryCard.map((group, index) => {
        return (
          <div className="w-3/12 rounded-2xl overflow-hidden relative">
            <Image src={avatar} width={256} height={160} />
            <div className="absolute flex items-center justify-center top-36 right-5 w-14 h-14">
              <Image
                src={profile}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="absolute inset-0 border rounded-full border-white/50" />
              <Icon
                name="check circle"
                className="absolute bottom-0 right-0 text-orange"
              />
            </div>
            <span className="bg-gray-700 px-4 absolute right-2 top-2.5 rounded-lg">
              {group.duration}
            </span>
            <div className="px-5 py-5 bg-gray-800">
              <div className="flex items-center">
                <span className="text-xs font-normal tracking-wider text-gray-500">
                  {group.name}
                </span>
                <span
                  className={`w-2 h-2 ml-2 rounded-full ${
                    group.color === "Green" ? "bg-green" : "bg-orange"
                  }`}
                ></span>
              </div>
              <h3 className="inline-block pt-1 font-medium leading-relaxed">
                {group.title}
              </h3>
              <span className="inline-block pt-4 text-sm tracking-wider text-gray-500 ">
                {group.views} • {group.created_at}
              </span>
            </div>
          </div>
        );
      } )}
    </div>
  );
}

export const secondaryCard = [
  {
    title: "Basic Jumping and how to landing safely",
    avatar: "../../public/static/avatar.jpg",
    background: "/public/static/fishy.jpg",
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    color: "Green",
    duration: "12 min",
  },
  {
    title: "Super tehcnics you should know about Things",
    avatar: "../../public/static/doggy.jpg",
    background: "/public/static/mousy.jpg",
    name: "Micheal Hursh",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    color: "Orange",
    duration: "18 min",
  },
  {
    title: "Tips and tricks for the growth of enzyme and organism",
    avatar: "../../public/static/doggy.jpg",
    background: "/public/static/mousy.jpg",
    name: "Phillip Mallk",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    color: "Purple",
    duration: "25 min",
  },
  {
    title: "Play the best of games to boost your mind",
    avatar: "../../public/static/doggy.jpg",
    background: "/public/static/mousy.jpg",
    name: "Costine Paul",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    color: "Blue",
    duration: "10 min",
  },
];
