import React, {Fragment, FC } from 'react';
import Header from '../components/Header';
import photo1 from '../img/logan-weaver.jpg'

interface HomeScreenProps {
    translate: (key: string) => string
}

console.log(photo1);

const HomeScreen: FC<HomeScreenProps> = ({translate}) => {

    return (
        <Fragment>
        
            <Header/>
            <div className="box">
                <img src={photo1} alt="" />
            </div>
            <div className='flex-center-container'>
        
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
                <li>{translate('l2')}</li>
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
        </div>
        </Fragment>
    )
}

export default HomeScreen
