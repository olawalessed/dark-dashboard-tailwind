import styles from '@/styles/Dashboard.module.css'
import DashHeader from '@/components/fixed/DashHeader'
import { Icon, Button } from 'semantic-ui-react';



export default function DashboardLayout({ children}) {
    return (
      <div>
        <DashboardLayout />
        <div className={styles.wrapper}>
          <header className={styles.header}>Admin Benard</header>

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
         {children}
          <aside className={styles.sidebar}>Sidebar</aside>
          <div className={styles.ad}></div>
          <footer className={styles.footer}>The Footer</footer>
        </div>
      </div>
    );
}
