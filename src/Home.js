import React from 'react';
import ProductSlider from './components/primary/ProductSlider.js'
import Banner from './components/primary/Banner.js'
import MerchSecond from './components/primary/MerchSecond.js'

let Home = () => {
    return (
        <>
        <Banner />
        <ProductSlider />
        <MerchSecond />
        <ProductSlider />
        </>
    )
}

export default Home