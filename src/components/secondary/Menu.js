import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'


let Menu = () => {
    return (
        <div className="menu">
            <div className="icons">
                <Link to='/login'><MdAccountCircle /></Link>
                <AiFillShopping />
            </div>
        </div>
    )
}

export default Menu