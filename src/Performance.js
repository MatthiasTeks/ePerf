import React from 'react'
import ThumbstickCat from './assets/thumbstick.png'
import './styles/performance.css'

let Performance = () => {
    return (
        <div className="performance">
            <div className="rowProduct">
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Thumbstick</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Grip</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Rings</h3>
                </div>
            </div>
            <div className="rowProduct">
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Gel</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Exo</h3>
                </div>
            </div>
        </div>
    )
}

export default Performance