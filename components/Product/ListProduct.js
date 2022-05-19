import React from 'react'
import SwitchSelectors from './SwitchSelectors'
import PrettoSliders from './PrettoSliders'
import Card from '../CardProduct/Card'
import { motion} from "framer-motion";
export default function ListProduct() {
    return (
        <motion.div className='flex'>
            <div className='flex w-full flex-col'>
                <h1 className='text-5xl font-extrabold'>
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
                            <h1 className='text-purple-700'>
                                $1 - $100
                            </h1>
                            <div className='flex w-52 h-14 items-center border-1 p-3 rounded-full border-gray-200'>
                                <PrettoSliders />
                            </div>
                        </div>
                    </div>
                </div>
                <Card type={{category: 'all'}} />
            </div>
        </motion.div>
    )
}
