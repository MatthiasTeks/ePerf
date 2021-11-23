import React from 'react'
import { AiOutlineCompress } from 'react-icons/ai'
import { AiOutlineHeatMap } from 'react-icons/ai'
import ProductExemple from '../../assets/productExemple.png'
import '../../styles/merchSecond.css'

let MerchSecond = () => {
    return (
        <div className="merchSecond">
            <div className="content">
                <h2>Manette Esport</h2>
                <p>
                    Ipsum sunt eu aliqua occaecat cupidatat laboris in excepteur do eiusmod duis amet sint.
                    Excepteur occaecat sint et ut mollit irure excepteur duis qui. Do adipisicing pariatur velit occaecat.
                    Sint quis occaecat nulla ut. Laboris esse officia consectetur laboris fugiat aliquip mollit ea.
                    Officia id et culpa sunt in nostrud qui deserunt consectetur id dolor nisi.
                    Aliquip ullamco commodo qui sint ut nostrud officia qui fugiat duis minim duis dolor.
                </p>
                <div className="stats">
                    <AiOutlineCompress />
                    <p>PRECISION +20%</p>
                    <AiOutlineHeatMap />
                    <p>RATIO +20%</p>
                </div>
            </div>
{/*             <div className="merchAssets">
                <img src={ProductExemple} alt="merch Assets Exemple"/>
            </div> */}
        </div>
    )
}

export default MerchSecond