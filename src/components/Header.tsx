import React, { useCallback, useState, useEffect, useRef, useContext, FC } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { LangContext } from '../context/lang'

interface HeaderProps {
    fixed?:boolean;
    transparent?: boolean;
}


const Header: FC<HeaderProps> = ({fixed, transparent }) => {
    const {state: {language}, dispatch: {setLanguage, translate}} = useContext(LangContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    let headerClass = 'header';

    if(fixed) {
        headerClass += ' header--fixed';
    }

    if(transparent) {
        headerClass += ' header--transparent';
    }

    const handleClickOutside = useCallback((e)=> {
        if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
            setShowDropdown(false);
        }
    }, [showDropdown, setShowDropdown, dropdownEl])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        setLanguage(value);
    }


    return (
        <Navbar className='box nBar' expand='md'>
          <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to={`${process.env.PUBLIC_URL}/galerie`}>{translate('galerie')}</Link>
                    <Link to={`${process.env.PUBLIC_URL}/despre`}>{translate('despre')}</Link>
                    <Link to={`${process.env.PUBLIC_URL}/contact`}>{translate('contact')}</Link>
                    <p className="selected" onClick={()=> setShowDropdown(!showDropdown)}>{language}</p>
                    {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                        <li onClick={() => chooseLanguageHandler('EN')}>EN</li>
                        <li onClick={() => chooseLanguageHandler('RO')}>RO</li>
                    </ul>
}
                </Nav>
            </Navbar.Collapse>
               
        </Navbar>
    )
}

export default Header
