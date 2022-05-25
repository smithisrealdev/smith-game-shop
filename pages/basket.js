import React from 'react'
import IconText from '../assets/images/detail_card/call_of_duty.jpg'
import IconClose from '../assets/images/close.png'
import Image from 'next/image'

const mockData = [
    {
        id: 1,
        image: IconText,
        name: 'Call of Duty',
        category: 'Action',
        price: 11.45
    },
    {
        id: 2,
        image: IconText,
        name: 'Call of Duty',
        category: 'Action',
        price: 11.45
    },
    {
        id: 3,
        image: IconText,
        name: 'Call of Duty',
        category: 'Action',
        price: 11.45
    },
    {
        id: 4,
        image: IconText,
        name: 'Call of Duty',
        category: 'Action',
        price: 11.45
    },
    {
        id: 5,
        image: IconText,
        name: 'Call of Duty',
        category: 'Action',
        price: 11.45
    },
]
export default function Basket() {
    return (
        <React.Fragment>
            <div className="flex flex-col flex-1 py-32 gap-8 px-60 bg-search">
                <h1 className=" text-2xl">
                    Basket Items
            </h1>
                {
                    mockData.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-1">
                                <div className="flex flex-1 h-36 bg-neutral-50 hover:shadow-md rounded-md hover:p-2">
                                    <div className='w-1/6 flex overflow-hidden'>
                                        <Image src={IconText} objectFit='cover' className='rounded-bl-md rounded-tl-md' alt='' />
                                    </div>
                                    <div className='flex flex-1 justify-between px-8 '>
                                        <div className='flex flex-1 flex-col gap-4'>
                                            <h1 className='text-slate-500 text-sm'>
                                                #{item.id}
                                            </h1>
                                            <h1 className='text-4xl font-medium'>
                                                {item.name}
                                            </h1>
                                            <div className='flex shadow-sm shadow-slate-200 gap-4 h-8 w-1/5 items-center px-1 rounded-sm bg-white'>
                                                <h1>
                                                    {item.category}
                                                </h1>
                                                <h1 className='text-gray-400'>
                                                    |
                                                </h1>
                                                <h1>
                                                    ${item.price}
                                                </h1>

                                            </div>
                                        </div>
                                        <div className='items-center flex'>
                                            <div className='item-center active:scale-75 cursor-pointer justify-center w-6 h-6'>
                                                <Image src={IconClose} alt='' objectFit='cover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='h-72 flex bg-neutral-50'>
            </div>
        </React.Fragment>
    )
}
