import React, { } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from 'next/image'
import PlayIcon from '../assets/images/play-icon.ico'
import AnimationLottie from '../utils/animationLottie'
import animationData from '../assets/json/gameoftheyear.json'
const Mockdata = [1, 2, 3, 4]
export default function CarouselComponent() {
    return (
        <Carousel className='flex rounded-lg m-0 h-auto bg-transparent shadow-2xl shadow-zinc-500/50' infiniteLoop={true} showStatus={false} autoPlay showArrows={false} showThumbs={false}>
            {
                Mockdata.map((item, index) => {
                    return <div key={index} className={
                        `flex flex-col font-bold h-custom rounded-lg
                         ${
                        // item === 1 ? 'bg-green-600/90' :
                        item === 2 ? 'bg-green-600/90' :
                            item === 3 ? 'bg-rose-600/90' :
                                item === 4 ? 'bg-amber-600/90' :
                                    null
                        }
                        `
                    }>
                        {item === 1 ? (
                            <div className='flex h-full justify-center items-center'>
                                <AnimationLottie animationData={animationData} height={'50%'} width={'50%'} />
                            </div>
                        ) : (
                            <div className='p-20'>
                                <div className={`flex text-xl 
                                    ${
                                        item === 2 ? 'text-green-300' :
                                            item === 3 ? 'text-rose-300' :
                                                'text-amber-300'
                                    }`}>
                                    <h1>
                                        over 2,000 games
                                    </h1>
                                </div>
                                <div className='flex text-7xl text-white'>
                                    <h1>
                                        Best Deals
                                    </h1>
                                </div>
                                <div className='flex text-7xl text-white'>
                                    <h1>
                                        on SmithShop
                                    </h1>
                                </div>
                                <button className='text-white  justify-around items-center px-5 mt-10 flex rounded-full border-1 border-bottom-nav h-12 w-40 text-base'>
                                    <h1>
                                        View offers
                                    </h1>
                                    <Images objectFit="cover" width={15} height={15} src={PlayIcon} />
                                </button>
                            </div>
                        )}
                    </div>
                })
            }
        </Carousel>
    )
}
