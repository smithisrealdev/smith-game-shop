import React from 'react'
import { useSelector } from 'react-redux';
import bag from '../../assets/images/bag-white.png'
import Images from 'next/image'
import { motion } from "framer-motion";
export default function Content() {
    const {
        category
    } = useSelector((state) => state.main);
    return (
        <motion.div
            layoutpath="underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`${category === 'arcade' ? 'from-orange-600 to-orange-400 shadow-orange-500/50' :
                category === 'strategy' ? 'from-rose-600 to-rose-400 shadow-rose-500/50' :
                    category === 'action' ? 'from-green-600 to-green-400 shadow-green-500/50' :
                        'from-purple-600 to-purple-400 shadow-purple-500/50'} 
                    flex active:scale-90 items-center gap-2 justify-center shadow-md font-bold text-white w-full h-11 bg-gradient-to-r rounded-full`}>
                <Images className='object-cover' alt='' src={bag} width={22} height={22} />

                <h1 className='mt-1'>
                    Add to Cart
                </h1>
            </div>
        </motion.div>
    )
}

