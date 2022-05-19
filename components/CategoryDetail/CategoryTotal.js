import React from 'react'
import Card from '../CardProduct/Card'
export default function CategoryTotal(type) {
    return (
        <div className='px-20 pt-4'>
            <div className={`box-decoration-slice flex justify-center font-bold text-5xl text-white p-4 rounded-md bg-gradient-to-r capitalize shadow-md  
            ${
                type.category === 'arcade' ? 'from-orange-600 to-orange-400 shadow-orange-500/50' :
                type.category === 'strategy' ? 'from-rose-600 to-rose-400 shadow-rose-700/50' :
                type.category === 'action' ? 'from-emerald-600 to-emerald-400 shadow-emerald-500/50' :
                'from-purple-600 to-purple-400 shadow-purple-500/50'
            }`}>
                {type.category}
            </div>
            <Card type={type} />
        </div>
    )
}
