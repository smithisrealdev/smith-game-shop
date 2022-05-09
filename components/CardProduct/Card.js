import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import Content from './Content'
import Images from 'next/image'
import bgSimple from '../../assets/images/call_of_duty.png'
import bag from '../../assets/images/bag-white.png'
export default function Card() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleEnter = () => setIsOpen(true);
    const toggleLeave = () => setIsOpen(false);
    const Content = () => {
        return (
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="flex items-center gap-2 justify-center font-bold text-white w-full h-11 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mt-5" >

                    <Images className='object-cover' src={bag} width={22} height={22} />
                    <h1 className='mt-1'>
                        Add to Cart
                </h1>
                </div>
                <div className="row" />
                <div className="row" />
            </motion.div>
        )
    }
    return (
        <AnimateSharedLayout>
            <motion.div className='rounded-2xl hover:shadow-lg hover:shadow-slate-300 hover:p-3 bg-white w-72 p-2' layout>
                <motion.div onMouseEnter={toggleEnter} onMouseLeave={toggleLeave} layout className='w-full h-full outline-none'>
                    <motion.div
                        layout
                    >
                        <Images layout="responsive" src={bgSimple} className='rounded-lg object-cover' height={250} width={300} />
                        <motion.div layout className='px-3'>
                            <motion.h1 className='flex gap-1 items-center text-slate-500 font-light text-sm'>
                                Game <motion.div layout className='w-1 h-1 rounded-full bg-slate-500' /> Xbox One
                            </motion.h1>
                            <motion.div layout className='flex justify-between flex-col w-full h-28' >
                                <motion.h1 className='text-slate-700 text-xl'>
                                    Call Of Duty : Black Ops 4
                                </motion.h1>
                                <motion.h1 className='text-orange-500 font-bold text-xl'>
                                    $19.99
                                </motion.h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
                </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    )
}
