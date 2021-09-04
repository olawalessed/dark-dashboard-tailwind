// import car from '../../public/static/doggy.jpg'
import Image from 'next/image'
import { Icon } from 'semantic-ui-react'
import avatar from '../../public/static/avatar-1.jpg'
import avatar2 from '../../public/static/avatar-2.jpg'

export default function CardPrimary() {
    return (
      <div className="flex space-x-7 py-4">
        {primaryCard.map((group, index) => {
          return (
            <div
              className={`h-96 rounded-2.5xl p-10 bg-card-one bg-no-repeat bg-cover overflow-hidden relative ${
                index === 0 ? "w-7/12" : "w-5/12"
              } ${index === 0 ? "bg-card-one" : "bg-card-two"}`}
              styles={{ backgroundImage: `url(${group.background})` }}
            >
              <h1 className="text-3xl font-semibold max-w-xs">{group.title}</h1>
              <div className="flex flex-wrap-reverse pt-4 pr-24 mt-10 items-center space-x-2">
                <div className="flex items-center justify-center rounded-full relative w-14 h-14">
                  <Image
                    src={index === 0 ? avatar : avatar2}
                    width={40}
                    height={40}
                    layout="intrinsic"
                    alt=""
                    className="rounded-full"
                  />
                  <span className="absolute inset-0 border rounded-full border-white/50" />
                  <Icon
                    name="check circle"
                    
                    className="absolute bottom-0 right-0 text-white-200"
                  />
                </div>
                <div className="flex flex-col py-1.5 pl-2">
                  <a href="#" className="font-medium tracking-wider">
                    {group.name}
                  </a>
                  <span className="text-xs tracking-wider text-white/80">
                    {group.views}  •  {group.created_at}{" "}
                  </span>
                </div>
              </div>
              <span className="absolute px-2.5 py-0.5 right-5 bottom-5 rounded-lg test-xs bg-gray-800">{group.duration}</span>
            </div>
          );
        })}
      </div>
    );
}


export const primaryCard = [
  {
    title: "How to do basic Jumping and how to landing safely",
    avatar: "../../public/static/avatar.jpg",
    background: "../../public/static/fishy.jpg",
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    duration: "7 min",
  },
  {
    title: "Speed boat tehcnics you should know",
    avatar: "../../public/static/doggy.jpg",
    background: "../../public/static/mousy.jpg",
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "check",
    duration: "7 min",
  },
];