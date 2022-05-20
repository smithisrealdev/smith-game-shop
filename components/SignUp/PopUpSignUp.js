import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '../../assets/images/menu.png'
import Images from 'next/image'
import Profile1 from '../../assets/images/profile1.png'
import Profile2 from '../../assets/images/profile2.png'
import Profile3 from '../../assets/images/profile3.png'
import Profile4 from '../../assets/images/profile4.png'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
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
    borderRadius: 2,
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
        profile: Profile3,
        name: 'Smith no3'
    },
    {
        id: 4,
        profile: Profile4,
        name: 'Smith no4'
    },
]
export default function PopUpSignUp({ open, handleClose }) {
    const {
        category
    } = useSelector((state) => state.main);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="flex flex-1 gap-2 items-center justify-center">
                    <div className="flex items-center justify-center flex-1 flex-col gap-2">
                        <h1 className=" font-medium text-slate-700 text-5xl">
                            Welcome Back
                        </h1>
                        <h1 className=" font-normal text-slate-500 text-md">
                            Join the world's largest community
                    </h1>
                    </div>
                    <div className="w-32 h-24 p-4 flex -ml-28 flex-col bg-white rounded-xl">
                        {MockData.map((item) => {
                            return (
                                <div className="flex gap-2 items-center ">
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
                                    <div className="shadow-lg bg-white rounded-2xl flex flex-col justify-between w-32 h-28 p-3">
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
                                                <Images src={item.profile} layout="fill" />
                                            </Avatar>
                                            <span className="relative cursor-pointer active:scale-75 h-4 w-4">
                                                <Images objectFit='cover' src={MenuIcon} />
                                            </span>
                                        </div>
                                        <div className="flex flex-1 items-end justify-center font-bold text-slate-500 text-sm capitalize">
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
                                <Fab className={`active:scale-90 w-12 h-12 text-white 
                                ${category === 'arcade' ? 'bg-orange-400 hover:bg-orange-400' :
                                        category === 'strategy' ? 'bg-rose-400 hover:bg-rose-400' :
                                            category === 'action' ? 'bg-green-400 hover:bg-green-400' :
                                                'bg-purple-400 hover:bg-purple-400'
                                    }`} aria-label="add">
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
                    <div className="flex flex-col gap-4 flex-1 bg-white p-8 rounded-2xl shadow-lg">
                        <div className='flex gap-6 justify-center'>
                            <div className='flex flex-col items-start gap-3'>
                                <div className='rounded-lg border-2 w-64 h-12 items-center shadow-inner text-sm flex px-4 '>
                                    <input className='bg-transparent w-full outline-none' placeholder="Phone number,username or email" />
                                </div>
                                <div className='flex gap-2 justify-center items-center text-sm'>
                                    <input type='checkbox' className='bg-transparent rounded-3xl w-5 h-5 accent-purple-500' />
                                        Remember for 30 days
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <div className='rounded-lg border-2 w-64 h-12 items-center shadow-inner text-sm flex px-4 '>
                                    <input className='bg-transparent w-full outline-none' placeholder="Password" />
                                </div>
                                <button className='flex gap-2 justify-center font-normal cursor-pointer active:scale-90 items-center text-sm underline'>
                                        Forgot Password
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </Box>
        </Modal>
    )
}
