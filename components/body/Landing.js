import { Header, Icon, Image, Grid, ImageGroup } from 'semantic-ui-react'
import SignupForm from './SignupForm'

const Landing = () => (
    <div>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column width verticalAlign='middle'>
                <Header as='h1' icon textAlign='left' >
                    Choouse Admin Panel
                    <Header.Subheader>
                    Choouse to Read, Choouse to Lead
                    </Header.Subheader>
                </Header>
                </Grid.Column>

                <Grid.Column width={9}>
                <Image src='https://res.cloudinary.com/choouse/image/upload/v1627514320/image-from-rawpixel-id-479762-recolor.png' fluid />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      
      
        
    </div>
  )
  
  export default Landing