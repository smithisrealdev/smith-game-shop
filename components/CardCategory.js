import React from 'react'
import Images from 'next/image'
import ForwardIcon from '../assets/images/icon-forward.png'
export default function CardCategory({ img, titlCategory }) {
    return (
        <div className=' relative w-52 h-54 justify-center'>
            <div className='flex h-full items-end justify-center z-20'>
                <div className={
                    titlCategory === 'Arcade' ? 'flex items-end shadow-xl bg-orange-400 shadow-orange-400/50 rounded-lg h-32 w-44' :
                        titlCategory === 'Strategy' ? 'flex items-end shadow-xl bg-rose-400 shadow-rose-400/50 rounded-lg h-32 w-44' :
                            titlCategory === 'Action' ? 'flex items-end shadow-xl bg-emerald-400 shadow-emerald-400/50 rounded-lg h-32 w-44' :
                                titlCategory === 'Show All' ? 'flex items-end shadow-xl bg-purple-400 shadow-purple-400/50 rounded-lg h-32 w-44' : null} >
                    <div className='h-20 font-extrabold text-white w-full px-5 flex justify-between items-center'>
                        <h1>
                            {titlCategory}
                        </h1>
                        <Images className='object-cover' width={10} height={10} src={ForwardIcon} />
                    </div>
                </div>
            </div>

            {!img &&
                // <div className='absolute -z-10'>
                    <div className='absolute top-1/3 mx-auto left-custom -z-0 flex items-end shadow-xl bg-emerald-400 shadow-emerald-400/50 rounded-lg h-32 w-44'>
                    {/* </div> */}
                </div>}
            {img &&
                <div className='absolute top-0 mx-auto left-custom'>
                    <div className='bg-forward rounded-full flex items-center justify-center'>
                        <Images className='object-cover bg-red-50 rounded-lg' height={140} width={140} src={img} />
                    </div>
                </div>}


        </div>
    )
}
