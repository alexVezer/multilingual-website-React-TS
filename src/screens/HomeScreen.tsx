import React, {Fragment, FC } from 'react';
import Header from '../components/Header';



interface HomeScreenProps {
    translate: (key: string) => string
}

const HomeScreen: FC<HomeScreenProps> = ({translate}) => {

    return (
        <Fragment>
            <Header/>
            <h2>HomeScreen</h2>
            <h3>Welcome</h3>
        
            <div className='box'>
            <p>
            {translate('p1')}
            </p>
            <p>
                    {translate('p2')}

                </p>
            <p>{translate('p3')}</p>
            </div>
            <div className='box'>
            {translate('p4')}
            </div>
            <div className="box">{translate('p5')} 
            <ul>
                <li>{translate('l1')}</li>
                <li>s{translate('l2')}</li>
                <li>{translate('l3')}</li>
                <li>{translate('l4')}</li>
            </ul>
            </div>
            <div>
                <p>{translate('p6')}</p>
            </div>
            <div className="box">
                <p>{translate('p7')}</p>
            </div>
            <div className="box">
                Better invest in an online marketing campaign that will bring you customers. 
            </div>
        </Fragment>
    )
}

export default HomeScreen
