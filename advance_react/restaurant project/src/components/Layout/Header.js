import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import './Header.css'
import './HeaderCartButton.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Little Lemon</h1>
            <HeaderCartButton />
        </div>
    )
}

export default Header