import React from 'react'
import { motion } from "framer-motion";
import Carousel from '../components/CarouselComponent'
import CardCategory from '../components/CardCategory'
import ArcadeBg from '../assets/images/ArcadeBg.jpg'
import ActionBg from '../assets/images/actionBg.jpg'
import StrategyBg from '../assets/images/strategyBg.jpg'
import {container,item} from '../utils/motionVariants'
export default function WapperProduct() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='flex gap-2 -z-0 py-8 '>
            <motion.div variants={item} className='w-8/12'>
                <Carousel />
            </motion.div>
            <motion.div
                className='flex flex-col w-4/12 justify-between'>
                <motion.div className='flex'>
                    <CardCategory id='arcade' titlCategory='Arcade' subTitle='156' img={ArcadeBg} />
                    <CardCategory id='action' titlCategory='Action' subTitle='312' img={ActionBg} />
                </motion.div>
                <motion.div className='flex'>
                    <CardCategory id='strategy' titlCategory='Strategy' subTitle='290' img={StrategyBg} />
                    <CardCategory id='all' titlCategory='Show All' subTitle='+25' />
                </motion.div>
            </motion.div>
        </motion.div>

    )
}
