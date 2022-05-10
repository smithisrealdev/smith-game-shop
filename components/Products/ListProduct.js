import React from 'react'
import SwitchSelectors from './SwitchSelectors'
import PrettoSliders from './PrettoSliders'
import Card from '../CardProduct/Card'
import Images from 'next/image'
import playIcon from '../../assets/images/iconplay_orange.png'
import Button from '@mui/material/Button';

export default function ListProduct() {
    return (
        <div className='flex'>
            <div className='flex w-full flex-col'>
                <h1 className='text-4xl font-semibold'>
                    Our Products
                </h1>
                <div className='flex w-full flex-1 justify-between '>
                    <div className='h-14 p-2 font-semibold border-gray-200 border-1 bg-white   rounded-full mt-10 w-80'>
                        <SwitchSelectors />
                    </div>
                    <div className='flex items-end'>
                        <div className='flex gap-2 items-center'>
                            <h1>
                                Price Range
                            </h1>
                            <h1 className='text-orange-500'>
                                $1 - $100
                            </h1>
                            <div className='flex w-52 h-14 items-center border-1 p-3 rounded-full border-gray-200'>
                                <PrettoSliders />
                            </div>
                        </div>
                    </div>
                </div>
                <Card />
                <div className='flex flex-1 justify-center items-center'>
                    <Button variant="outlined" color='warning' className='animate-bounce text-orange-500 border-orange-500  justify-around items-center px-5 mt-10 flex rounded-full border-1 h-12 w-40 text-base'>
                        <h1 className=' text-sm'>Show More</h1>
                        <Images
                            // layout="fill"
                            className=' rotate-90'
                            fill={'red'}
                            objectFit="cover"
                            width={15} height={15} src={playIcon} 
                            
                            />

                    </Button>

                </div>
            </div>
        </div>
    )
}
