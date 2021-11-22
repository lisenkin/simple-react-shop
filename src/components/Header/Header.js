import React from 'react'
import './Header.css'
import MiniCart from './mini-cart/mini-cart'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title"><Link to='/'> just a simple React shop </Link></h1>
            <MiniCart />
        </header>
    )
}

export default Header