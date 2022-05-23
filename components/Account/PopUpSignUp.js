import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '/assets/images/menu.png'
import Images from 'next/image'
import Profile1 from '../../assets/images/profile1.png'
import Profile2 from '../../assets/images/profile2.png'
import TwitterIcon from '../../assets/images/login/twitter.png'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import GoogleLogin from './GoogleLogins'
import FaceBookLogin from './FacebookLogin'
import Register from './Register'
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1350,
    height: 750,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 2,
    bgcolor: '#F5F7F9',
    borderRadius: 10,
    boxShadow: 15,
    // p: 4,
};

const MockData = [
    {
        id: 1,
        profile: Profile1,
        name: 'Smith no1'
    },
    {
        id: 2,
        profile: Profile2,
        name: 'Smith no2'
    },
    {
        id: 3,
        profile: Profile2,
        name: 'Smith no3'
    },
    {
        id: 4,
        profile: Profile1,
        name: 'Smith no4'
    },
]

export default function PopUpSignUp({ open, handleClose, isSignedIn, setIsSignIn }) {
    const { category } = useSelector((state) => state.main);
    const [isClickSwitch, setIsClickSwitch] = useState()
    const Checkboxs = styled(Checkbox)({
        color: category === 'arcade' ? '#fb923c' :
            category === 'strategy' ? '#f43f5f' :
                category === 'action' ? '#12b981' :
                    '#a855f7',
        '&.Mui-checked': {
            color: category === 'arcade' ? '#fb923c' :
                category === 'strategy' ? '#f43f5f' :
                    category === 'action' ? '#12b981' :
                        '#a855f7',
        },
    });
    useEffect(() => {
        setIsSignIn(isClickSwitch)
    }, [isClickSwitch])
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {isSignedIn ? (
                    <React.Fragment>
                        <div className="flex flex-1 gap-2 items-center justify-center">
                            <div className="flex items-center justify-center flex-1 flex-col gap-2">
                                <h1 className="font-medium text-slate-700 text-5xl">
                                    Welcome Back
                        </h1>
                                <h1 className="font-normal text-slate-500 text-md">
                                    Join the world largest community
                        </h1>
                            </div>
                            <div className="w-32 h-24 p-4 flex -ml-28 flex-col bg-white rounded-xl">
                                {MockData.map((item) => {
                                    return (
                                        <div key={item.id} className="flex gap-2 items-center ">
                                            <div className="flex">
                                                <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75 
                                            ${item.id === 1 ? 'bg-green-400' :
                                                        item.id === 2 ? 'bg-yellow-400' :
                                                            item.id === 3 ? 'bg-orange-400' :
                                                                'bg-red-400'
                                                    }`}></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 
                                            ${item.id === 1 ? 'bg-green-400' :
                                                        item.id === 2 ? 'bg-yellow-400' :
                                                            item.id === 3 ? 'bg-orange-400' :
                                                                'bg-red-400'
                                                    }`}></span>
                                            </div>
                                            <h1 className=' capitalize text-xs font-semibold text-slate-500'>
                                                -  {item.id === 1 ? 'always' : item.id === 2 ? 'sometimes' : item.id === 3 ? 'not often' : 'new account'}
                                            </h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col h-5/6">
                            <div className=" flex px-28 flex-col">
                                <div className="py-4 font-medium">
                                    Recent logins
                        </div>
                                <div className="flex gap-4">
                                    {MockData.map((item) => {
                                        return (
                                            <div key={item.id} className="shadow-lg bg-white rounded-2xl flex flex-col justify-between w-32 h-28 p-3">
                                                <div className="flex justify-between ">
                                                    <span className={`animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 
                                            ${item.id === 1 ? 'bg-green-400' :
                                                            item.id === 2 ? 'bg-yellow-400' :
                                                                item.id === 3 ? 'bg-orange-400' :
                                                                    'bg-red-400'
                                                        }`}></span>
                                                    <span className={`relative inline-flex rounded-full h-3 w-3 
                                            ${item.id === 1 ? 'bg-green-400' :
                                                            item.id === 2 ? 'bg-yellow-400' :
                                                                item.id === 3 ? 'bg-orange-400' :
                                                                    'bg-red-400'
                                                        }`}></span>
                                                    <Avatar className="mt-2 bg-transparent cursor-pointer active:scale-90">
                                                        <Images alt='' src={item.profile} layout="fill" />
                                                    </Avatar>
                                                    <span className="relative cursor-pointer active:scale-75 h-4 w-4">
                                                        <Images alt='' objectFit='cover' src={MenuIcon} />
                                                    </span>
                                                </div>
                                                <div className="flex flex-1 items-end justify-center font-bold text-gray-600 text-sm capitalize">
                                                    {item.name}
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className={`shadow-lg rounded-2xl flex flex-col justify-center items-center w-32 h-28 p-3 
                                ${category === 'arcade' ? 'bg-orange-500 shadow-orange-500/50' :
                                            category === 'strategy' ? 'bg-rose-500 shadow-rose-500/50' :
                                                category === 'action' ? 'bg-green-500 shadow-green-500/50' :
                                                    'bg-purple-500 shadow-purple-500/50'
                                        }`}>
                                        <Fab sx={{
                                            backgroundColor:
                                                category === 'arcade' ? '#fb923c' :
                                                    category === 'strategy' ? '#f43f5f' :
                                                        category === 'action' ? '#12b981' :
                                                            '#a855f7',
                                            '&:hover': {
                                                backgroundColor: category === 'arcade' ? '#fb923c' :
                                                    category === 'strategy' ? '#f43f5f' :
                                                        category === 'action' ? '#12b981' :
                                                            '#a855f7',
                                            }
                                        }} className={`active:scale-90 w-12 h-12 text-white`} aria-label="add">
                                            <AddIcon />
                                        </Fab>
                                        <div className="flex flex-1 items-end justify-center font-bold text-white text-sm capitalize">
                                            add account
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 my-4">
                                <div className=" w-1/2 h-or bg-gray-300" />
                                <h1 className='text-2xl text-slate-500'>
                                    or
                        </h1>
                                <div className=" w-1/2 h-or bg-gray-300" />
                            </div>
                            <div className="flex flex-col gap-4 pb-4 flex-1 bg-white p-8 rounded-2xl  shadow-lg">
                                <div className='flex gap-7 justify-center'>
                                    <div className='flex flex-col w-3/12 items-start gap-1'>
                                        <div className='rounded-lg border-2 w-full h-12 border-gray-400 items-center text-sm flex px-4 '>
                                            <input className='bg-transparent w-full outline-none' placeholder="Phone number,username or email" />
                                        </div>
                                        <div className='flex justify-center items-center text-sm'>
                                            <FormControlLabel control={<Checkboxs />} label={<h1 className='font-normal text-sm'>Remember for 30 days</h1>} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-3/12 items-start gap-4'>
                                        <div className='rounded-lg border-2 border-gray-400 w-full h-12 items-center text-sm flex px-4'>
                                            <input className='bg-transparent w-full outline-none' placeholder="Password" />
                                        </div>
                                        <button className='flex gap-2 justify-center font-normal cursor-pointer active:scale-90 items-center text-sm underline'>
                                            Forgot Password
                                </button>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center mt-2'>
                                    <div className='w-5/12 gap-3 flex flex-col'>
                                        <button className='flex items-center text-white justify-center shadow-sm shadow-gray-700 rounded-lg active:scale-95 w-full h-12 bg-gray-700'>
                                            Sign In
                                </button>
                                        <button onClick={() => setIsSignIn(false)} className={`flex items-center text-white justify-center shadow-sm rounded-lg active:scale-95 w-full h-12 ${category === 'arcade' ? 'bg-orange-500 shadow-orange-500/50' :
                                            category === 'strategy' ? 'bg-rose-500 shadow-rose-500/50' :
                                                category === 'action' ? 'bg-green-500 shadow-green-500/50' :
                                                    'bg-purple-500 shadow-purple-500/50'
                                            }`}>
                                            Create New Account
                                </button>
                                        <div className="flex items-center gap-4">
                                            <div className=" w-2/6 h-or bg-gray-300" />
                                            <h1 className='text-slate-500'>
                                                Or continue with
                                    </h1>
                                            <div className=" w-2/6 h-or bg-gray-300" />
                                        </div>
                                        <div className='flex gap-9 item-center justify-center'>
                                            <GoogleLogin />
                                            <FaceBookLogin />
                                            {/* <buttom className='w-7 h-7 active:scale-90 cursor-pointer'>
                                        <Images src={FacebookIcon} />
                                    </buttom> */}
                                            <button className='w-7 h-7 active:scale-90 cursor-pointer'>
                                                <Images alt='' src={TwitterIcon} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex items-center text-xs justify-center flex-1'>
                                    <div>
                                        By clicking button above, you agree to our
                                <Link href="https://www.linkedin.com/notifications/" target='_blank' underline="none">
                                            {' '}terms of use
                                </Link> and
                                <Link href="#" target='_blank' underline="none">
                                            {' '}private policies
                                </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <Register setAlreadyAccount={(value) => setIsSignIn(value)} />
                )}


            </Box>
        </Modal>
    )
}
