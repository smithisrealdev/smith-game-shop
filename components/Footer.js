import React from 'react'
import Image from 'next/image'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'
import LinkedInIcon from '../assets/images/linkedin.png'
import GithubIcon from '../assets/images/github.png'
import AnimationLottie from '../utils/animationLottie'
import Link from 'next/link';
const ContactList = [
    {
        id: 1,
        img: FacebookIcon,
        source: 'https://www.facebook.com/apichat.naumtoon'
    },
    {
        id: 2,
        img: TwitterIcon,
        source: 'https://twitter.com/l_smithisreal'
    },
    {
        id: 3,
        img: LinkedInIcon,
        source: 'https://www.linkedin.com/in/apichet-nuamtun-10a3841b3/'
    },
    {
        id: 4,
        img: GithubIcon,
        source: 'https://github.com/smithisreal'
    },
]

export default function Footer() {
    return (
            <div className="grid grid-cols-4 border-t-2 border-bottom-nav px-20 py-10">
                <div className="flex">
                    <div className='flex w-full h-2/6 items-center'>
                        <div className='w-24 h-20'>
                            <AnimationLottie />
                        </div>
                        <h1 className=' font-extrabold text-rose-500 text-2xl'>
                            SmithShop
                    </h1>
                    </div>

                </div>
                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        SmithShop
                </h1>
                    <Link href="#">
                        <a>
                            About Us
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Support Hub
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Contact
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            FAQ
                    </a>
                    </Link>
                </div>
                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        Our Product
                </h1>
                    <Link href="#">
                        <a>
                            Games
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Cards and Points
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Subscriptions
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            DLC
                    </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Software
                    </a>
                    </Link>
                </div>

                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        Follow Us
                </h1>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-3'>
                            {ContactList.map((list) => {
                                return (
                                    <Link key={list.id} href={list.source} passHref>
                                        <a target='_blank' className="border-1 rounded-full flex items-center justify-center p-4">
                                            <Image src={list.img} objectFit='cover' width={28} height={28} />
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex flex-1 gap-2">
                            <h1 className=" font-bold text-black">
                                Credit design by
                        </h1>
                            <Link href="https://dribbble.com/selecto">
                                <a target='_blank'>
                                    SELECTO
                            </a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

    )
}
