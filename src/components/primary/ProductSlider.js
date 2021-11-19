import React from 'react'
import CardProduct from '../secondary/cardProduct.js'
import '../../styles/productSlider.css'

let ProductSlider = () => {
    return (
        <div className="productSlider">
            <div>
                <h3>Manette Esport</h3>
            </div>
            <hr></hr><br/>
            <div className="slide">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}

export default ProductSlider