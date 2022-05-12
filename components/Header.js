import React, { useState } from 'react'
import AnimationLottie from '../utils/animationLottie'
import Images from 'next/image'
import HeartIcon from '../assets/images/heart.png'
import BagIcon from '../assets/images/bag.png'
import Button from '@mui/material/Button';
import Login from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LoupeIcon from '../assets/images/loupe.png'
import Link from 'next/link'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
export default function Header() {
    return (
        <nav className="bg-white font-main border-b-2 border-bottom-nav h-22 flex items-center px-20 fixed w-full top-0 z-10">
            <div className='w-1/6 flex items-center'>
                <div className='w-24 h-20'>
                    <AnimationLottie />
                </div>
                <h1 className=' font-extrabold text-orange-500 text-2xl'>
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
                <Button variant="outlined" color='warning' className='rounded-full border-1 border-bottom-nav text-slate-700 h-12 px-8'>
                    {/* <Link href="/"> */}
                    <h1 className='font-main text-sm'>Sign up</h1>
                    {/* </Link> */}
                </Button>
                <Login className='h-12 items-center text-base flex text-slate-700' href="#" underline="none">
                    {'Login'}
                </Login>
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
        </nav>
    )
}
