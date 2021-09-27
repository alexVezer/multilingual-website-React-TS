import React, {FC} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Page404Props {
    translate: (key: string) => string
}
const Page404:FC<Page404Props> = ({translate}) => {
    return (
        <section className='page-404'>
            <Container>
                <h1>404</h1>
                <p>{translate('pageNotFound')}</p>
                <p><Link to='/'>{translate('backToHomepage')}</Link> </p>
            </Container>
            
        </section>
    )
}

export default Page404
