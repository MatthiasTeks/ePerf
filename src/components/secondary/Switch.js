import React from 'react';
import { Link } from 'react-router-dom';

let Switch = () => {
    return (
        <div className="navbarSwitch">
            <Link to='/performances'><p>PERFORMANCES</p></Link>
            <Link to='/peripheriques'><p>PERIPHERIQUES</p></Link>
            <Link to='/boissons'><p>BOISSONS</p></Link>
        </div>
    )
}

export default Switch