import React from 'react';
import ProductExemple from '../../assets/productExemple.png'
import { BsFillCircleFill } from 'react-icons/bs'

let CardProduct = () => {
    return (
        <div className="cardProduct">
            <div className="card">
                <div className="contentAssets">
                    <img src={ProductExemple} alt="controller Battle Beaver"/>
                </div>
                <div className="contentProduct">
                    <div className="resumeProduct">
                        <h3>Battle Beaver Pro</h3>
                        <p>119,99$</p>
                    </div>
                    <div className="colorProduct">
                        <p>Couleur</p>
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                    </div>
                    <div className="consoleProduct">
                        <div className="console">
                            <p>PS4/PS5</p>
                        </div>
                        <div className="console">
                            <p>XBOX X/S/M</p>
                        </div>
                        <div className="console">
                            <p>SWITCH</p>
                        </div>
                    </div>
                    <div className="buyButton">
                        <p>AJOUTER AU PANIER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct 