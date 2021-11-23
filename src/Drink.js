import React from 'react'
import ThumbstickCat from './assets/thumbstick.png'
import './styles/performance.css'

let Drink = () => {
    return (
        <div className="performance">
            <div className="rowProduct">
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Rez Energy Drink</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>LevelUp</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>RealMix</h3>
                </div>
            </div>
        </div>
    )
}

export default Drink