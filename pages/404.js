import React from 'react'
import AnimationLottie from '../utils/animationLottie'
import animationData from '../assets/json/error-page.json'
export default function NotFound() {
    return (
        <div >
            <AnimationLottie animationData={animationData} width={'50%'} height={'50%'}/>
        </div>
    )
}
