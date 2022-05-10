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
                className='flex w-5/12'>
                <motion.div className=' grid grid-flow-row gap-8'>
                    <CardCategory titlCategory='Arcade' img={ArcadeBg} />
                    <CardCategory titlCategory='Action' img={ActionBg} />
                </motion.div>
                <motion.div className=' grid grid-flow-row gap-8'>
                    <CardCategory titlCategory='Strategy' img={StrategyBg} />
                    <CardCategory titlCategory='Show All' />
                </motion.div>
            </motion.div>
        </motion.div>

    )
}
