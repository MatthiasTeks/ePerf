import React from 'react'
import Logo from '../secondary/Logo.js'
import Switch from '../secondary/Switch.js'
import Menu from '../secondary/Menu.js'
import '../../styles/navbar.css'

let Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Switch />
            <Menu />
        </div>
    )
}

export default Navbar