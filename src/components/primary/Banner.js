import React from 'react'
import BannerVideo from '../../assets/Abstract.mp4'
import '../../styles/banner.css'

let Banner = () => {
    return (
        <div className="banner">
            <video loop autoPlay muted src={BannerVideo} />
        </div>
    )
}

export default Banner