import React,{useState} from 'react'
import animationData from '../assets/json/game-console.json'
import Lottie from 'react-lottie';
export default function animationLottie() {
    const [isStopped, setIsStopped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Lottie options={defaultOptions}
            height='100%'
            width='100%'
            isStopped={isStopped}
            isPaused={isPaused} />
    )
}
