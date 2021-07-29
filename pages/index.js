import Layout from '../components/Layout'
import Landing from '../components/body/Landing'
import SignupForm from '../components/body/SignupForm'
import { GridColumn, Grid } from 'semantic-ui-react'




const Index = () => {

    return (
        <Layout>
            <Landing />
            <Grid>

                <Grid.Row>
                <Grid.Column width='6'>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
            
        </Layout>
    )
}


export default Index