import Image from 'next/image'
import Header from '../components/fixed/Header'

export default function Hero() {
    return (
      <div className="container h-screen">
        <section className="flex bg-gradient-to-r from-purple-900 to-blue-900 relative px-16 py-10 h-full">
          <div className="flex w-1/2">
            <div className="flex flex-col p-10  justify-center">
              <h1 className="text-5xl text-white font-black ">
                The Ultimate Dashboard Display Design with Tailwind CSS
              </h1>
              <h4 className="text-xl font-light text-white py-2">
                See the workflow of how this dashboard was design witht the
                powerful tailwind css
              </h4>
              <button
                type="button"
                className="px-8 py-4 my-5 rounded-md bg-orange text-white w-2/5"
              >
                <a href="/dashboard">
                Go to Dashboard
                </a>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="https://www.pexels.com/photo/person-on-truck-s-roof-2449600/"
              width={512}
              height={768}
            />
          </div>
        </section>
      </div>
    );
}
