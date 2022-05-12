import React from "react";
import { motion,AnimateSharedLayout } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import Link from "next/link";
import { items } from "./data";
import Images from 'next/image';
export default function Item({ ids }) {
    console.log("Items ::",ids)
    const {id,name,img,price,} = items.find(item => item.id === 'product/'+ids);
    
    return (
                <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                        className='h-screen w-screen'

                >
                        <motion.div className="flex bg-red-200 items-center px-20 h-96 flex-1">
                            <motion.div className=" text-6xl font-semibold">
                                {name}
                            </motion.div>
                            <motion.div >
                            {price}
                            </motion.div>
                            {/* <Images src={img}/> */}
                        </motion.div>
                        <motion.div className="flex bg-red-200 items-center px-20 flex-1">
                            <motion.div className="flex ">
                                {name}
                            </motion.div>
                            <motion.div className="flex ">
                            {price}
                            </motion.div>
                            {/* <Images src={img}/> */}
                        </motion.div>
                </motion.div>
    );
}
