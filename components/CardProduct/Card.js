import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import Content from './Content'
import Images from 'next/image'
import CallDutyBg from '../../assets/images/call_of_duty.png'
import DimsBg from '../../assets/images/dims_xbox.webp'
import MaxresBg from '../../assets/images/maxres_xbox.jpg'
import CapsuleBg from '../../assets/images/capsule_xbox.jpg'
import Stalker2Bg from '../../assets/images/Stalker2_xbox.jpeg'
import TheGunkBg from '../../assets/images/the-gunk_xbox.jpg'
import TellMeWhyBg from '../../assets/images/TellMeWhy_xbox.jpg'
import Psychonauts2Bg from '../../assets/images/Psychonauts-2_xbox.jpg'
import bag from '../../assets/images/bag-white.png'
import { container, item } from '../../utils/motionVariants'
import playIcon from '../../assets/images/iconplay_orange.png'
import Button from '@mui/material/Button';
const items = [
    {
        id: 1,
        img: CallDutyBg,
        price: 19.99
    },
    {
        id: 2,
        img: DimsBg,
        price: 12.99
    },
    {
        id: 3,
        img: MaxresBg,
        price: 9.99
    },
    {
        id: 4,
        img: CapsuleBg,
        price: 11.99
    },
    {
        id: 5,
        img: Stalker2Bg,
        price: 19.59
    },
    {
        id: 6,
        img: TheGunkBg,
        price: 14.99
    },
    {
        id: 7,
        img: TellMeWhyBg,
        price: 11.99
    },
    {
        id: 8,
        img: Psychonauts2Bg,
        price: 22.99
    },
];


export default function Card() {

    return (
        <AnimateSharedLayout>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                layout>
                <motion.div className='mt-8 grid grid-cols-4 gap-4 cursor-pointer' layout>
                    {items.map(list => (
                        <Item id={list.id} img={list.img} price={list.price} key={list} />
                    ))}
                </motion.div>
                <motion.div variants={item} className='flex flex-1 justify-center items-center'>
                    <Button variant="outlined" color='warning' className='animate-bounce text-orange-500 border-orange-500  justify-around items-center px-5 mt-10 flex rounded-full border-1 h-12 w-40 text-base'>
                        <h1 className=' text-sm'>Show More</h1>
                        <Images
                            className=' rotate-90'
                            fill={'red'}
                            objectFit="cover"
                            width={15} height={15} src={playIcon}
                        />
                    </Button>
                </motion.div>
            </motion.div>



        </AnimateSharedLayout>
    )
}


function Item({ id, img, price }) {
    const [isOpen, setIsOpen] = useState(false);
    const [ids, setIds] = useState(null);
    const toggleLeave = () => setIsOpen(false);

    const onEnterSelect = () => {
        setIsOpen(true);
        setIds(id)
    }
    return (
        <motion.div
            variants={item}
            onMouseEnter={onEnterSelect}
            onMouseLeave={toggleLeave}
            className=' outline-none rounded-2xl hover:shadow-lg hover:shadow-slate-300 hover:p-3 bg-neutral-50 p-2'>
            <motion.div
                layout
            >
                <Images layout="responsive" src={img} className='rounded-lg object-cover' height={250} width={300} />
                <motion.div layout className='px-3'>
                    <motion.h1 className='flex gap-1 items-center text-slate-500 font-light text-sm'>
                        Game <motion.div layout className='w-1 h-1 rounded-full bg-slate-500' /> Xbox One
                 </motion.h1>
                    <motion.div layout className='flex justify-between flex-col w-full h-28' >
                        <motion.h1 className='text-slate-700 text-xl'>
                            Call Of Duty : Black Ops 4
                     </motion.h1>
                        <div className='flex justify-between gap-x-6 items-center'>
                            <motion.h1 className='text-orange-500 font-bold text-xl'>
                                ${price}
                            </motion.h1>
                            <div className='w-full'>
                                <AnimatePresence >{isOpen && <Content />}</AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

function Content() {
    return (
        <motion.div
            layoutId="underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex items-center gap-2 justify-center font-bold text-white w-full h-11 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" >
                <Images className='object-cover' src={bag} width={22} height={22} />

                <h1 className='mt-1'>
                    Add to Cart
                </h1>
            </div>
        </motion.div>
    )
}

