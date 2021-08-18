import axios from 'axios'
import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'

const URL_PATH = 'https://dobook.herokuapp.com/register'

export default function EarlyBird() {

    const [username, setUsername] = useState('Your name')
    const [email, setEmail] = useState('yourmail@nothing.com')

    

    const registerUser = async (e) => {
        e.preventDefault()

        var data =  {username, email}

        var requestOptions = {
          method: "POST",
          body: data,
          redirect: "follow",
        }
        
        fetch(URL_PATH, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
    }

    return (
        
      <div>
          {username} and {email}
        <Form id="frum" onSubmit={registerUser}>
          <Form.Input
            label="Full Name"
            placeholder="Rebecca"
            id="username"
            name="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
          />

          <Form.Input
            label="Email Address"
            placeholder="name@email.com"
            id="email"
            name="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />

          <Button type="submit">Register</Button>
        </Form>
      </div>
    );
}
