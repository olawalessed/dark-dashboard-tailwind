import CreatorsForm from '../components/CreatorsForm'
import Layout from '@/components/fixed/Layout'
import Link from 'next/link'
import styles from '@/styles/Index.module.css'
import { Button } from 'semantic-ui-react';


export default function Index () {

    return (
      <Layout>
        <div>
          
            
              <Link href="/account/login">
                <Button 
                secondary
                >Login</Button>
              </Link>
            
          
        </div>
      </Layout>
    );
}
