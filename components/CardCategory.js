import React, { } from 'react'
import Images from 'next/image'
import ForwardIcon from '../assets/images/icon-forward.png'
import DownIcon from '../assets/images/downArrow.png'
import { motion } from "framer-motion";
import { item } from '../utils/motionVariants'
import { useDispatch } from 'react-redux';
import * as mainAction from '../store/actions/index';
import Link from 'next/link'

export default function CardCategory({ id, img, titlCategory, subTitle }) {
    const dispatch = useDispatch();
    const handleSelectCategory = (id) => {
        dispatch(mainAction.handleCategory(id));
    }
    return (
        <div onClick={() => handleSelectCategory(id)}>
            <Link href={`/category/${id}`} passHref>
                <motion.div variants={item} className=' relative w-52 h-54 justify-center'>
                    <div className='flex h-full items-end justify-center z-20'>
                        <div className={`flex items-end shadow-xl cursor-pointer rounded-lg h-32 w-44
                ${titlCategory === 'Arcade' ? 'bg-orange-400 shadow-orange-400/50' :
                                titlCategory === 'Strategy' ? 'bg-rose-500 shadow-rose-400/50' :
                                    titlCategory === 'Action' ? 'bg-emerald-500 shadow-emerald-400/50' :
                                        null
                            }`} >
                            <div className='flex flex-col w-full'>
                                <div className='font-extrabold text-white px-5 flex justify-between items-center'>
                                    <h1>
                                        {titlCategory}
                                    </h1>
                                    <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                                        <Images objectFit="cover" alt='' width={12} height={12} src={ForwardIcon} />
                                    </button>
                                </div>
                                <div className='flex items-center pl-5 font-medium text-xs text-gray-300 pb-3'>
                                    {subTitle} games
                        </div>

                            </div>

                        </div>
                    </div>
                    {!img &&
                        <React.Fragment>
                            <div className='absolute top-16 mx-auto left-4 -z-0 flex items-end shadow-xl bg-blue-500  rounded-lg h-32 w-44 cursor-pointer' />
                            <div className='absolute top-18 left-4 mx-auto -z-0 flex items-end shadow-xl bg-emerald-500 rounded-lg h-32 w-44 cursor-pointer' />
                            <div className='absolute top-22 mx-auto left-4 -z-0 flex items-end shadow-xl bg-purple-500  shadow-purple-400/50 rounded-lg h-32 w-44 cursor-pointer' >
                                <div className='flex flex-col w-full'>
                                    <div className='font-extrabold text-white px-5 flex justify-between items-center'>
                                        <h1>
                                            {titlCategory}
                                        </h1>
                                        <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                                            <Images objectFit='cover' alt='' className='rotate-90' width={12} height={12} src={ForwardIcon} />
                                        </button>
                                    </div>
                                    <div className='flex items-center pl-5 font-medium text-xs text-gray-300 pb-3'>
                                        {subTitle} games
                        </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    {img &&
                        <div className='absolute top-0 mx-auto left-custom cursor-pointer'>
                            <div className='bg-forward rounded-full flex items-center justify-center'>
                                <Images className='object-cover bg-red-50 rounded-lg' alt='' height={140} width={140} src={img} />
                            </div>
                        </div>}
                </motion.div>

            </Link>

        </div>

    )
}
