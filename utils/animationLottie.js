import React,{useState} from 'react'
import Lottie from 'react-lottie';
export default function animationLottie({animationData,height,width,stop}) {
    const [isStopped, setIsStopped] = useState(stop ? stop : false)
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
            className=' cursor-none'
            height={height}
            width={width}
            isStopped={isStopped}
            isPaused={isPaused} />
    )
}
