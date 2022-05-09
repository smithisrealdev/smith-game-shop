import React from 'react'
import SwitchSelector from "react-switch-selector";
// import Slider from '@mui/material/Slider';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Card from './CardProduct/Card'
const PrettoSlider = styled(Slider)({
    color: '#F97315',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#F97315',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const options = [
    {
        label: "Bestsellers",
        value: "bestsellers",
        value: {
            foo: true
        },
        selectedBackgroundColor: '#F97315',
    },
    {
        label: "Newest",
        value: "newest",
        selectedBackgroundColor: "#F97315"
    }
];

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

export default function ListProduct() {
    return (
        <div className='flex px-20 py-12 h-screen bg-search'>
            <div className='flex w-full flex-col'>
                <h1 className='text-4xl font-semibold'>
                    Our Products
                </h1>
                <div className='flex w-full flex-1 justify-between '>
                    <div className='h-14 p-2 font-semibold border-gray-200 border-1 bg-white   rounded-full mt-10 w-80'>
                        <SwitchSelector
                            // onChange={onChange}
                            options={options}
                            initialSelectedIndex={initialSelectedIndex}
                            backgroundColor={"#ffffff"}
                            fontColor={"#FF7452"}
                        />
                    </div>
                    <div className='flex items-end'>
                        <div className='flex gap-2 items-center'>
                            <h1>
                                Price Range
                            </h1>
                            <h1 className='text-orange-500'>
                                $1 - $100
                            </h1>
                            <div className='flex w-52 h-14 items-center border-1 p-3 rounded-full border-gray-200'>
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    defaultValue={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 gap-y-10 grid grid-cols-4'>
                    {[1, 2, 3, 4, 5,].map((item) => {
                        return <Card  key={item}/>
                    })}
                </div>
            </div>
        </div>
    )
}
