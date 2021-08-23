import styles from '@/styles/AuthForm.module.css'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'

export default function AuthForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()


        console.log({email, password})
    }
    return (
      <div className={styles.auth}>
        <h3>Admin Login</h3>

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
          <label htmlFor="email" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.btn}>
            <Button secondary fluid>
              Log In
            </Button>
          </div>
        </form>
      </div>
    );
}
