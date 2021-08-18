import { Form, Checkbox, Button } from "semantic-ui-react";
import { useState, useRef } from "react";
import axios from 'axios'

export default function CreatorsForm () {

    const [state, setstate] = useState({
      title: "",
      fname: "",
      lname: "",
      email: "",
      phone1: "",
      content: "",
      images: ""
    })

    const form = useRef()
    //console.log(form)

   const trackChange = e => {
      setstate({
        [e.target.name]: e.target.value
      })
    }

    const registerUser = async event => {
        event.preventDefault()

        const { title, fname, lname, email, phone1, content, images } = state

        let data = new FormData(state)
        


        axios.post('https://dobook.herokuapp.com/creators', {
          method: 'POST',
          body: data
        })
        .then(res => res.json())
        


    }
    return (
      <div>
        <p>{state.fname} {state.lname}</p>
        <Form ref={form}  id="formElement" onSubmit={registerUser} onChange={trackChange}>
          
          <Form.Field label="Title" control="select">
            <option value="male">Mr.</option>
            <option value="female">Mrs.</option>
            <option value="female">Prof</option>
            <option value="female">Dr.</option>
          </Form.Field>

          <Form.Input
            label="First Name"
            placeholder="Rebecca"
            id="fname"
            type="text"
          />

          <Form.Input
            label="Last Name"
            placeholder="Olatokun"
            id="lname"
            type="text"
          />

          <Form.Input
            label="email"
            placeholder="yourname@email.com"
            id="email"
            type="email"
          />

          <Form.Input
            label="Phone Number"
            placeholder="+233 908 702 1253"
            id="phone1"
            type="number"
          />

          <Form.Input label="Content" id="content" type="file" />

          <Form.Input label="Thumbnail" id="images" type="file" />

          <Button type="submit">Get Started</Button>
        </Form>
      </div>
    );
}
