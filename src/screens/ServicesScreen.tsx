import React, { Fragment, FC, useState } from 'react'
import { Table } from 'react-bootstrap'
import Header from '../components/Header'

interface ServicesScreenProps {
    translate: (key: string) => string
}

const ServicesScreen:FC<ServicesScreenProps> = () => {

//    console.log(services);
    return (
        <Fragment>
            <Header/>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Offer 1</th>
                        <th>Offer 2</th>
                        <th>Offer 3</th>
                        <th>Offer 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {/* { services.map(service = () => {

                       })}  */}
                       <td></td>                     
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default ServicesScreen
