import styles from "@/styles/Intro.module.css";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>
          <Link href="/account/login">
            <a>Admin Login</a>
          </Link>
        </h1>
      </div>
      
    </div>
  );
}
