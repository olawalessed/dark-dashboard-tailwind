import { Header, Icon, Image, Grid, ImageGroup, Form, Button } from 'semantic-ui-react'

const Landing = () => {


    const handleSubmit =(e) => {
        e.preventDefault()

        console.log(e)

    }

   return (
    <div>
        <h3>Login to Choouse Control Panel</h3>
                <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input type='text' placeholder='Admin-Stalker' />
                        </Form.Field>

                        <Form.Field>
                            <label>Password</label>
                            <input type='password' placeholder='***********' />
                        </Form.Field>

                        <Button color='teal' type='submit' onSubmit={handleSubmit}>Login to Portal</Button>
                    </Form>      
        
    </div>
    )
}
  
  export default Landing