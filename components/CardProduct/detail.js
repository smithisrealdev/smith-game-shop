import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import Link from "next/link";
import { items } from "./data";
import Images from 'next/image';
import { container,item, detailLeft, detailRight } from '../../utils/motionVariants'
export default function Detail({ ids }) {
    const {
        id,
        name,
        img,
        detail,
        price,
        recent_reviews_count,
        recent_reviews,
        all_reviews,
        all_reviews_count,
        release_date,
        developer,
        publicsher
        , } = items.find(item => item.id === 'product/' + ids);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className='h-screen w-screen'
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex text-left px-20 h-4/6 gap-6 flex-1">
                <motion.div variants={detailLeft} className="h-full  justify-center  flex flex-col flex-1 ">
                    <motion.dev variants={container}>
                        <motion.div variants={item} className='text-5xl font-semibold'>
                            {name}
                        </motion.div>
                        <motion.div variants={item} className='text-xl text-slate-700 font-medium'>
                            {detail}
                        </motion.div>
                        <motion.div className='mt-4 text-md text-slate-600 font-medium'>
                            <motion.div variants={item}>
                                RECENT REVIEWS:
                            <Link href='#'>
                                    <a className='text-rose-500'>
                                        {' ' + recent_reviews + ' '}
                                    </a>
                                </Link>
                            ({recent_reviews_count})
                        </motion.div>
                            <motion.div variants={item}>
                                ALL REVIEWS:
                            <Link href='#'>
                                    <a className='text-rose-500'>
                                        {' ' + all_reviews + ' '}
                                    </a>
                                </Link>
                            ({all_reviews_count})
                        </motion.div>
                            <motion.div variants={item}>
                                RELEAES DATE:
                                {' ' + release_date}
                            </motion.div>
                            <motion.div variants={item}>
                                DEVELOPER:
                            <Link href='#'>
                                    <a className='text-rose-500'>
                                        {' ' + developer + ' '}
                                    </a>
                                </Link>
                            </motion.div>
                            <motion.div variants={item}>
                                PUBILSHER:
                            <Link href='#'>
                                    <a className='text-rose-500'>
                                        {' ' + publicsher + ' '}
                                    </a>
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.button variants={item} className="items-center mt-12 justify-center font-bold text-white w-48 h-11 bg-gradient-to-r from-rose-500 to-rose-400 rounded-md" >
                            {'$'+price+' '}Buy Now
                    </motion.button>

                    </motion.dev>

                </motion.div>
                <motion.div variants={detailRight} className="text-6xl items-center justify-center flex flex-1">
                    <Images objectFit='cover' className='rounded-md' width={700} height={420} src={img} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
