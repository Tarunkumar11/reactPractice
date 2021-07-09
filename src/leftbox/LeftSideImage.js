import React from 'react'
import './LeftSideImage.css'
import leftsifeimage from '../images/1.jpg';


function LeftSideImage() {
    return (
        <div className="img_div">
            <img src={leftsifeimage} alt="this is an iamge" />
        </div>
    )
}

export default LeftSideImage;