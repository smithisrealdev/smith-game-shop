import React, { useState, useEffect } from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import { useSelector } from 'react-redux';
import Images from 'next/image'
import { container, item } from '../../utils/motionVariants'
import playIcon from '../../assets/images/iconplay_orange.png'
import { items } from './data'
import Item from './Item'
export default function Card({ type }) {
    const [countProduct, setCountProduct] = useState(items.length)
    useEffect(() => {
        if (type.category !== "all") {
            setCountProduct(items.filter((item) => item.category === type.category))
        }
    }, [type])
    const {
        category
    } = useSelector((state) => state.main);
   
    return (
        <AnimateSharedLayout>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='pb-12 container mx-auto'
                layout>
                <motion.div className='mt-8 grid grid-cols-4 gap-4' layout>
                    {type?.category === 'all' ? (items.map(list => (
                        <Item id={list.id} type={list.category} path={list.path} name={list.name} img={list.img} price={list.price} key={list.path} />
                    ))
                    ) : (
                        items.map(list => {
                            return list.category === type?.category ? (
                                <Item id={list.id} type={list.category} path={list.path} name={list.name} img={list.img} price={list.price} key={list.path} />
                            ) : null
                        })
                    )
                    }
                </motion.div>
                {countProduct > 8 && <motion.div variants={item} className='flex flex-1 justify-center items-center'>
                    <button className={
                        `animate-bounce justify-around items-center px-5 mt-10 flex rounded-full border-1 h-12 w-40 text-base  ${
                            category === 'arcade' ? 'hover:border-orange-700 hover:bg-orange-50 text-orange-700' :
                            category === 'strategy' ? 'hover:border-rose-700 hover:bg-rose-50 text-rose-700' :
                            category === 'action' ? 'hover:border-green-700 hover:bg-green-50 text-green-700' :
                                'hover:border-purple-700 hover:bg-purple-50 text-purple-700'
                        }
                        }`
                    }>
                        <h1 className=' text-sm'>Show More</h1>
                        <Images
                            className=' rotate-90'

                            fill={'red'}
                            objectFit="cover"
                            width={15} height={15} src={playIcon}
                        />
                    </button>
                </motion.div>
                }

            </motion.div>
        </AnimateSharedLayout>
    )
}
