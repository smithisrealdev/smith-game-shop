import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from 'next/image'
import GamingBg from '../assets/images/Gaming.jpg'
export default function CarouselComponent() {
    return (
        <Carousel className='flex rounded-lg m-0 h-auto bg-transparent shadow-xl shadow-slate-300' infiniteLoop={true} showStatus={false} autoPlay showArrows={false} showThumbs={false}>
            <div className='flex h-full'>
                <Images className='object-cover rounded-lg ' src={GamingBg} />
            </div>
            <div className='flex h-full'>
                <Images className='object-cover rounded-lg ' src={GamingBg} />
            </div>
            <div className='flex h-full'>
                <Images className='object-cover rounded-lg ' src={GamingBg} />
            </div>
        </Carousel>
    )
}
