import React from 'react'
import ThumbstickCat from './assets/thumbstick.png'
import './styles/performance.css'

let Peripherique = () => {
    return (
        <div className="performance">
            <div className="rowProduct">
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Manette</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Clavier</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Souris</h3>
                </div>
            </div>
            <div className="rowProduct">
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Casque</h3>
                </div>
                <div className="productLink">
                    <img src={ThumbstickCat} alt='thumbstick grip for PS4'/>
                    <h3>Exo</h3>
                </div>
            </div>
        </div>
    )
}

export default Peripherique