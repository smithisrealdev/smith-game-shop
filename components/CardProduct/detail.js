import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { items } from "./data";
import Images from 'next/image';
import { container, item, detailLeft, detailRight, detailReview } from '../../utils/motionVariants'
import PlayIcon from '../../assets/images/detail_card/play.png'



export default function Detail({ ids }) {
    const carousel = useRef()
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
        publicsher,
        gameplay
        , } = items.find(item => item.id === 'product/' + ids);
    const [previewVideo, setPreviewVideo] = useState(gameplay && gameplay[0].video)
    const [previewImg, setPreviewImg] = useState(null)
    const [width, setWidth] = useState(0)
    const [focus, setFocus] = useState(1)
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    const handleSelectPreview = (listGame) => {
        setFocus(listGame.id)
        setPreviewVideo(listGame.video ? listGame.video : null)
        setPreviewImg(listGame.video ? null : listGame.img)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="h-screen w-screen"
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex text-left px-20 h-4/6 gap-6 flex-1 space-x-4">
                <motion.div variants={detailLeft} className="h-full  justify-center  flex flex-col flex-1 ">
                    <motion.dev variants={container}>
                        <motion.div variants={item} className='text-4xl font-semibold text-black'>
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
                            {'$' + price + ' '}Buy Now
                    </motion.button>
                    </motion.dev>
                </motion.div>
                <motion.div variants={detailRight} className="text-6xl items-center justify-center flex flex-1">
                    {
                        previewImg ? (
                            <Images src={previewImg} className="w-full h-full rounded-lg" objectFit='cover' />
                        ) : (
                            <iframe className="rounded-lg h-3/4 w-full aspect-[4/4]" src={previewVideo + '?autoplay=1&mute=1'} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" webkitallowfullscreen="true" oallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        )
                    }
                </motion.div>
            </motion.div>

            <motion.dev
                ref={carousel}
                className='flex  overflow-hidden cursor-pointer mx-20' >
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='flex gap-2'
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}>
                    {gameplay.map((listGame) => {
                        return (
                            <motion.dev
                                variants={detailRight}

                                key={listGame.id} onClick={() => handleSelectPreview(listGame)} className={`${focus === listGame.id ? 'bg-rose-400' : null} rounded-lg p-1 `} >
                                {
                                    !listGame.video ? (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ rotate: 360, scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                            className='flex w-64 h-40 relative'>
                                            <motion.div className='z-10 absolute bg-transparent w-full h-full' />
                                            <Images src={listGame.img} className='rounded-lg w-full' height={250} objectFit='cover' />
                                        </motion.div>

                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ rotate: 360, scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                            className='flex   w-64 h-40 relative'>
                                            <motion.div className='z-10 absolute flex items-center justify-center bg-transparent w-full h-full' >
                                                <motion.div className='flex relative'>
                                                    <motion.div className='z-10 absolute  bg-transparent w-full h-full' />
                                                    <Images src={PlayIcon} width={60} height={60} objectFit='cover' />
                                                </motion.div>
                                            </motion.div>
                                            <Images className='-z-0 rounded-lg w-full' src={listGame.img} height={250} objectFit='cover' />
                                        </motion.div>
                                    )
                                }</motion.dev>
                        )
                    })}
                </motion.div>
            </motion.dev>
        </motion.div>
    );
}
