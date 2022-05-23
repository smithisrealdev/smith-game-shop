import React, { } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from 'next/image'
import PlayIcon from '../assets/images/play-icon.ico'
import AnimationLottie from '../utils/animationLottie'
import animationData from '../assets/json/gameoftheyear.json'
import Carousel1 from '../assets/images/carousel/carousel1.jpg'
import Carousel2 from '../assets/images/carousel/carousel2.jpg'
import Carousel3 from '../assets/images/carousel/carousel3.jpg'
import Carousel4 from '../assets/images/carousel/carousel4.jpg'
const Mockdata = [
    {
        id: 1,
        background: Carousel1
    },
    {
        id: 2,
        background: Carousel2
    },
    {
        id: 3,
        background: Carousel3
    },
    {
        id: 4,
        background: Carousel4
    },

]
export default function CarouselComponent() {
    return (
        <Carousel className='flex rounded-lg m-0 h-auto bg-transparent shadow-2xl shadow-zinc-500/50' infiniteLoop={true} showStatus={false} autoPlay showArrows={false} showThumbs={false}>
            {
                Mockdata.map((item) => {
                    return <div key={item.id} className={`flex flex-col font-bold h-custom rounded-lg overflow-hidden`}>
                        <div className='flex h-full justify-center items-center'>
                            {/* <AnimationLottie animationData={animationData} height={'50%'} width={'50%'} /> */}
                            <Images alt='' objectFit='cover' className=' rounded-lg' src={item.background} />
                        </div>
                    </div>
                })
            }
        </Carousel>
    )
}
