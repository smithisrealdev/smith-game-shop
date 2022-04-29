import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/json/game-console.json'
import Images from 'next/image'
import HeartIcon from '../assets/images/heart.png'
import BagIcon from '../assets/images/bag.png'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import LoupeIcon from '../assets/images/loupe.png'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
export default function Header() {
    const [isStopped, setIsStopped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <nav className="bg-white font-main border-b-2 border-bottom-nav h-22 flex items-center px-20 sticky top-0">
            <div className='w-1/6 flex items-center'>
                <div className='w-24 h-20'>
                    <Lottie options={defaultOptions}
                        height='100%'
                        width='100%'
                        isStopped={isStopped}
                        isPaused={isPaused} />
                </div>
                <h1 className=' font-extrabold text-2xl'>
                    SmithShop
                </h1>
            </div>
            <div className='w-2/5 ml-40 mr-8 flex justify-center items-center'>
                <div className='rounded-full w-full h-12 items-center gap-2 flex px-8 bg-search'>
                    <Images src={LoupeIcon} width={16} height={16} />
                    <input className='w-full bg-transparent outline-none' placeholder="Search">
                    </input>
                </div>

            </div>
            <div className='flex justify-center items-center gap-6'>
                <Button variant="outlined" color='warning' className='rounded-full border-1 border-bottom-nav text-slate-700 h-12 px-8'><h1 className='font-main text-sm'>Sign up</h1></Button>
                <Link className='h-12 items-center text-base flex text-slate-700' href="#" underline="none">
                    {'Login'}
                </Link>
                <div className='pl-4 flex gap-8'>
                    <IconButton aria-label="cart">
                        <Images src={HeartIcon} width={26} height={26} />
                    </IconButton>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color='warning'>
                            {/* <ShoppingCartIcon /> */}
                            <Images src={BagIcon} width={26} height={26} />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
