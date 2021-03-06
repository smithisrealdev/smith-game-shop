import React from 'react'
import AnimationLottie from '../utils/animationLottie'
import Images from 'next/image'
import HeartIcon from '../assets/images/heart.png'
import Avatar from '@mui/material/Avatar';
import BagIcon from '../assets/images/bag.png'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LoupeIcon from '../assets/images/loupe.png'
import Palette from '../assets/images/color-palette.png'
import HeartActive from '../assets/images/heart-active.png'
import Link from 'next/link'
import xboxOrange from '../assets/json/xbox-icon-orange.json'
import xboxGreen from '../assets/json/xbox-icon-green.json'
import xboxRose from '../assets/json/xbox-icon-rose.json'
import xboxPurple from '../assets/json/xbox-icon-purple.json'
import { useSelector, useDispatch } from 'react-redux';
import * as mainAction from '../store/actions/index';
import Modal from './Account/PopUpSignUp'
import Profile2 from '../assets/images/profile2.png'
export default function Navbar() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [isSignIn, setIsSignIn] = React.useState(true);
    const handleLogin = () => {
        setOpen(true);
        setIsSignIn(true)
    }
    const handleSignUp = () => {
        setOpen(true);
        setIsSignIn(false)
    }
    const handleClose = () => setOpen(false);
    const handleSelectCategory = () => {
        dispatch(mainAction.handleCategory('all'));
    }
    const {
        listOrder,
        category
    } = useSelector((state) => state.main);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            backgroundColor:
                category === 'arcade' ? '#fb923c' :
                    category === 'strategy' ? '#f43f5f' :
                        category === 'action' ? '#12b981' :
                            '#a855f7',
            color: '#FFFFFF',
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <nav className="bg-white font-main border-b-2 border-bottom-nav h-22 flex items-center px-20 sticky w-full top-0 z-10">
            <div className='w-1/6 flex items-center'>
                {/* <div className='w-24 h-20'>
                    <AnimationLottie
                        animationData={
                            category === 'arcade' ? xboxOrange :
                                category === 'strategy' ? xboxRose :
                                    category === 'action' ? xboxGreen :
                                        xboxPurple
                        }
                        height={'100%'}
                        width={'100%'} />
                </div> */}
                <Link href="/" >
                    <a onClick={() => handleSelectCategory()} className={` font-extrabold active:scale-90 text-2xl 
                    ${category === 'arcade' ? 'text-orange-500' :
                            category === 'strategy' ? 'text-rose-500' :
                                category === 'action' ? 'text-green-500' :
                                    'text-purple-500'}`}>
                        SmithShop.
                </a>
                </Link>

            </div>
            <div className='w-2/5 ml-32 mr-4 flex justify-center items-center'>

                <div className='rounded-full w-full h-12 items-center hover:border-1 gap-2 flex px-8 bg-search'>
                    <Images src={LoupeIcon} alt='' width={16} height={16} />
                    <input className='w-full bg-transparent outline-none' placeholder="Search" />
                </div>

            </div>
            <div className='flex justify-center items-center gap-5'>
                {/* <Avatar className="bg-transparent cursor-pointer active:scale-90">
                    <Images alt='' src={Profile2} layout="fill" />
                </Avatar> */}
                <button onClick={() => handleSignUp()} className={`rounded-full active:scale-90 border-1 border-bottom-nav text-slate-700 h-12 px-8 ${category === 'arcade' ? 'hover:border-orange-700 hover:bg-orange-50' :
                    category === 'strategy' ? 'hover:border-rose-700 hover:bg-rose-50' :
                        category === 'action' ? 'hover:border-green-700 hover:bg-green-50' :
                            'hover:border-purple-700 hover:bg-purple-50'
                    }`}>
                    Sign up
                </button>
                <div onClick={() => handleLogin()} className='h-12 items-center cursor-pointer text-base active:scale-90 flex text-slate-700'>
                    Login
                </div>
                <IconButton aria-label="cart" className='active:scale-90'>
                    {/* <Images src={HeartIcon} alt='' width={26} height={26} /> */}
                    <Images src={HeartActive} alt='' width={26} height={26} />
                </IconButton>
                <Link href="/basket" >
                    <a>
                        <IconButton aria-label="cart" className='active:scale-90'>
                            <StyledBadge badgeContent={listOrder?.length}>
                                {/* <ShoppingCartIcon /> */}
                                <Images alt='' src={BagIcon} width={26} height={26} />
                            </StyledBadge>
                        </IconButton>
                    </a>
                </Link>

                <IconButton aria-label="cart" className='active:scale-90'>
                    <Images alt='' src={Palette} width={26} height={26} />
                </IconButton>
            </div>
            <Modal open={open} isSignedIn={isSignIn} setIsSignIn={(value) => setIsSignIn(value)} handleClose={(value) => handleClose(value)} />
        </nav >
    )
}
