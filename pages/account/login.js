import { useState, useContext, useEffect } from "react";
import Layout from "@/components/fixed/Layout";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

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
        <div className={styles.auth}>
          <h1>Admin Login</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <input type="submit" value="Login" className={styles.submit} />
            </div>
            <div>
              <p>
                New to Choouse?
                <Link href="/account/register">
                  <a>Create Account</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
    </Layout>
  );
}
