import Layout from "@/components/fixed/Layout";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, error, } = useContext(AuthContext);
  
  console.log({user})
  return (
    <Layout>
      <div>
    
          <div className={styles.wrapper}>
            <header className={styles.header}>Welcome {user.name}</header>

            <nav className={styles.sideNav}>
              <ul className={styles.list}>
                <li>
                  <Icon name="home" size="small" />
                  <a>Dashboard</a>
                </li>
                <li>
                  <Icon name="home" size="small" />
                  <a>Users</a>
                </li>
                <li>
                  <Icon name="home" size="small" />
                  <a>Creators</a>
                </li>
                <li>
                  <Icon name="home" size="small" />
                  <a>Books</a>
                </li>
              </ul>
            </nav>
            {/* Content area */}
            <article className={styles.content}>
              <h1>Main article area</h1>
              <p>MOre content area goes here</p>
            </article>
            <aside className={styles.sidebar}>Sidebar</aside>
            <div className={styles.ad}></div>
            <footer className={styles.footer}>The Footer</footer>
          </div>

      </div>
    </Layout>
  );
}
