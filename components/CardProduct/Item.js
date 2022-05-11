import React from "react";
import { motion,AnimateSharedLayout } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import Link from "next/link";
import { items } from "./data";
import Images from 'next/image';
export default function Item({ ids }) {
    const {id,img,price} = items.find(item => item.id === ids);
    console.log("Items ::",img)
    return (
            <Link href="/">
                <a>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                        style={{ pointerEvents: "auto" }}
                        className="overlay"
                    >
                        <motion.div>
                            <Images src={img}/>
                        </motion.div>
                    </motion.div>
                </a>
            </Link>
    );
}
