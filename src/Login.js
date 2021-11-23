import React from 'react'
import Avatar from './assets/avatar.svg'
import { AiOutlineUser } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import './styles/login.css'

let Login = () => {
    return (
        <div className="login">
            <img src={Avatar} />
            <form>
                <AiOutlineUser />
                <input type="text" placeholder="username / mail"/><br/><br/>
                <FiLock />
                <input type="password" placeholder="password"/>
                <div className="sendHolder">
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    )
}

export default Login