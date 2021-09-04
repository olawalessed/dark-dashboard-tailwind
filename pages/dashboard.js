import Layout from "@/components/fixed/Layout";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import CardPrimary from "@/components/dashboard/CardPrimary";
import CardSecondary from "@/components/dashboard/CardSecondary";

export default function DashboardPage() {
  const router = useRouter();
  const { user, error } = useContext(AuthContext);

  console.log({ user });



  return (
    <Layout>
      <div className="flex font-sans text-white bg-gray-900">
        <div className="flex flex-col min-h-screen w-80">
          {/* Sidebar Header  */}
          <div className="px-10 py-10">
            <h1 className="text-xl font-semibold">Choouse++</h1>
          </div>
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="flex-col w-full pl-8 py-5 pr-5 items-center">
          {/* Navbar Section */}
          <Navbar />
          {/* Discover title */}
          <div className="pt-8">
            <h2 className="border-gray-300 font-semibold text-4xl">Discover</h2>
          </div>
          {/* Main Content Area */}
          <div>
            <CardPrimary />
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-medium">Most watched</h2>
            <div className="flex justify-between py-6">
              <CardSecondary />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


