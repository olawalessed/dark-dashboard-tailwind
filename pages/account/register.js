import { useState, useContext, useEffect } from "react";
import Layout from "@/components/fixed/Layout";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const router = useRouter();
  //Pull out info from the context for the component
  const {user, register, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error))
  //Handle Submission here
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Password not the same')
      return
    }

    try {
      register({ name, email, password });
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <Layout title="Admin Portal Login">
      <ToastContainer />
      {user ? (
        router.push("/dashboard")
      ) : (
        <div className={styles.auth}>
          <h1>Temp Register</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <label htmlFor="passwordConfirm" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <div>
              <input
                type="submit"
                value="Create Account"
                className={styles.submit}
              />
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}
