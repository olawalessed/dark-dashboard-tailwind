import { useState, useContext, useEffect } from "react";
import Layout from "@/components/fixed/Layout";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Icon } from "semantic-ui-react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  //Pull out info from the context for the component
  const {user, login, error } = useContext(AuthContext);
  //Handle Submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login({ email, password });
    } catch (err) {
      toast(err.message)
    }
  };

  
  return (
    <Layout title="Admin Portal Login">
      <ToastContainer />
      {/* <div>
        <Link href="/">
          <a>
            <Icon name="arrow left" size="small" />
            Go Back
          </a>
        </Link>
      </div> */}
      <div className="max-w-md rounded-xl p-8 shadow-lg m-auto block">
        <h1 className="text-3xl font-sans font-bold text-black pb-5">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit}>
          <label
            className="text-gray-400 text-xl font-sans py-2 block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="focus:border-light-blue-500 focus:ring-4 focus:ring-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-300 border-2 border-gray-200 rounded-md py-4 pl-3 mb-4"
            type="email"
            aria-label="Enter email address"
            placeholder="Enter email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="text-gray-400 text-xl font-sans py-2 block"
          >
            Password
          </label>

          <input
            className="focus:border-light-blue-500 focus:ring-4 focus:ring-blue-500
          focus:outline-none w-full text-sm text-black placeholder-gray-300
          border-2 border-gray-200 rounded-md py-4 pl-3"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="py-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-14 w-full rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login In
            </button>
          </div>
          <div>
            <p>
              New to Choouse?
              <Link href="/account/register">
                <a className="px-2 text-blue-600">Create Account</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
