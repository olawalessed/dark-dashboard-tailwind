import { useState, useContext, useEffect } from "react";
import Layout from "@/components/fixed/Layout";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Pull out info from the context for the component
  const { login, error } = useContext(AuthContext);
  //Handle Submission here
  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <Layout title="Admin Portal Login">
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
        </form>
      </div>
    </Layout>
  );
}
