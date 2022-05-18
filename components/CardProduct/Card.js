import React, { useState, useEffect} from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import Content from './Content'
import Images from 'next/image'
import bag from '../../assets/images/bag-white.png'
import { container, item } from '../../utils/motionVariants'
import playIcon from '../../assets/images/iconplay_orange.png'
import Button from '@mui/material/Button';
import Link from 'next/link'
import { items } from './data'

export default function Card({ type }) {
    const [countProduct, setCountProduct] = useState(items.length)
    useEffect(() => {
        if (type.category !== "all"){
            setCountProduct(items.filter((item) => item.category === type.category))
        }
    }, [type])
    return (
        <AnimateSharedLayout>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='pb-12 container mx-auto'
                layout>
                <motion.div className='mt-8 grid grid-cols-4 gap-4 cursor-pointer' layout>
                    {type?.category === 'all'? (items.map(list => (
                        <Item id={list.id} name={list.name} img={list.img} price={list.price} key={list.id} />
                    ))
                    ) : (
                        items.map(list => {
                            return list.category === type?.category ? (
                                <Item id={list.id} name={list.name} img={list.img} price={list.price} key={list.id} />
                            ) : null
                        })
                    )
                    }
                </motion.div>
                {countProduct > 8 && <motion.div variants={item} className='flex flex-1 justify-center items-center'>
                    <button className='animate-bounce text-rose-500 border-rose-500 hover:border-rose-500 hover:bg-red-50 justify-around items-center px-5 mt-10 flex rounded-full border-1 h-12 w-40 text-base'>
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


function Item({ id, img, name, price }) {
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
            className=' outline-none rounded-2xl hover:shadow-lg hover:shadow-slate-300 hover:p-3 bg-neutral-50 p-2'
            layoutId={`card-container-${id}`}
        >
            <Link href={id} className='absolute top-0 left-0 right-0 bottom-0'>
                <a>
                    <Images layout="responsive" src={img} className='rounded-lg object-cover' height={250} width={300} />
                    <motion.div layout className='px-3'>
                        <motion.h1 className='flex gap-1 items-center text-slate-500 font-light text-sm'>
                            Game <motion.div layout className='w-1 h-1 rounded-full bg-slate-500' /> Xbox One
                            </motion.h1>
                        <motion.div layout className='flex justify-between flex-col w-full h-28' >
                            <motion.h1 className='text-slate-700 text-xl'>
                                {name}
                            </motion.h1>
                            <div className='flex justify-between gap-x-6 items-center'>
                                <motion.h1 className='text-rose-500 font-bold text-xl'>
                                    ${price}
                                </motion.h1>
                                <div className='w-full'>
                                    <AnimatePresence >{isOpen && <Content />}</AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </a>
            </Link>
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
            <div className="flex items-center gap-2 justify-center font-bold text-white w-full h-11 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full" >
                <Images className='object-cover' src={bag} width={22} height={22} />

                <h1 className='mt-1'>
                    Add to Cart
                </h1>
            </div>
        </motion.div>
    )
}

