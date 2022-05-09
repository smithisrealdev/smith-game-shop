import React from 'react'
import { motion } from "framer-motion";

export default function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='wfull h-2 bg-slate-300 rounded-md mt-3'>
                skdjsakdhsajkdhasd
            </div>

        </motion.div>
    );
}