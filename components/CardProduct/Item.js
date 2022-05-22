import React, { useState } from 'react'
import Content from './Content'
import * as mainAction from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link'
import Images from 'next/image'
import { item } from '../../utils/motionVariants'
export default function Item({ id, path, img, name, price ,type}) {
    const [isOpen, setIsOpen] = useState(false);
    const [ids, setIds] = useState(null);
    const toggleLeave = () => setIsOpen(false);
    const dispatch = useDispatch();
    const handleAddOrder = (id) => {
        dispatch(mainAction.handleAddOrder(id));
    }
    const handleSelectCategory = (type) => {
        dispatch(mainAction.handleCategory(type));
    }
    const onEnterSelect = () => {
        setIsOpen(true);
        setIds(path)
    }
    const {
        category
    } = useSelector((state) => state.main);
   
    return (

        <motion.div
            variants={item}
            onMouseEnter={onEnterSelect}
            onMouseLeave={toggleLeave}
            className=' outline-none cursor-pointer rounded-2xl hover:shadow-lg hover:shadow-slate-300 hover:p-3 bg-neutral-50 p-2'
            layoutpath={`card-container-${path}`}
            onClick={() => handleSelectCategory(type)}
        >
            {/* <motion.div className='absolute top-0 left-0 right-0 bottom-0 -z-10'> */}
            <Link href={path}>
                <a >
                    <Images alt='' layout="responsive" src={img} className='rounded-lg object-cover' height={250} width={300} />
                    <motion.div layout className='px-3'>
                        <motion.h1 className='flex gap-1 items-center text-slate-500 font-light text-sm'>
                            Game <motion.div layout className='w-1 h-1 rounded-full bg-slate-500' /> Xbox One
                            </motion.h1>
                        <motion.div layout className='flex justify-between flex-col w-full h-28' >
                            <motion.h1 className='text-slate-700 text-xl'>
                                {name}
                            </motion.h1>
                            <div className='flex justify-between gap-x-6 items-center'>
                                <motion.h1 className={`font-bold text-xl 
                                    ${category === 'arcade' ? 'text-orange-500' :
                                        category === 'strategy' ? 'text-rose-500' :
                                            category === 'action' ? 'text-green-500' :
                                                'text-purple-500'
                                    }`}>
                                    ${price}
                                </motion.h1>
                                <div className='w-full z-40' onClick={() => handleAddOrder(id)}>
                                    <AnimatePresence >{isOpen && <Content />}</AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </a>
            </Link>


            {/* </motion.div> */}
        </motion.div>


    );
}

