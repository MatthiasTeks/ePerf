import React from 'react'
import { Link } from 'react-router-dom'
import LogoAssets from '../../assets/C - SF.png'

let Logo = () => {
    return (
        <div className="logoAssets">
            <Link to='/'><img src={LogoAssets} alt="logo wzfactory2"/></Link>
        </div>
    )
}

export default Logo