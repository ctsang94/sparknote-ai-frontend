import React from 'react'
import sparknotes from '../../assets/sparknotes.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Sparknotes AI</h1>
            <ul className="header__nav">
                <li className="header__nav-title">Home</li>
                <li className="header__nav-title">About Us</li>
            </ul>
            <button className="header__button">Get Started</button>
        </header>
    )
}

export default Header
