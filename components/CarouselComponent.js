import React, { } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from 'next/image'
import PlayIcon from '../assets/images/play-icon.ico'


const Mockdata = [1, 2, 3, 4]
export default function CarouselComponent() {
    return (
        <Carousel className='flex rounded-lg m-0 h-auto bg-transparent shadow-2xl shadow-zinc-500/50' infiniteLoop={true} showStatus={false} autoPlay showArrows={false} showThumbs={false}>
            {
                Mockdata.map((item,index) => {
                    return <div key={index} className={
                        `flex flex-col  p-20 font-bold h-custom rounded-lg
                        ${item === 1 ? 'bg-blue-600/90' :
                            item === 2 ? 'bg-violet-600/90' :
                                item === 3 ? 'bg-pink-600/90' :
                                    'bg-amber-600/90'
                        }`
                    }>
                        <div className={`flex text-xl 
                                ${item === 1 ? 'text-blue-300' :
                                item === 2 ? 'text-violet-300' :
                                    item === 3 ? 'text-pink-300' :
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
                })
            }
        </Carousel>
    )
}
