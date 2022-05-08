import React from 'react'
import SwitchSelector from "react-switch-selector";

const options = [
    {
        label: "Bestsellers",
        value: "bestsellers",
        value: {
            foo: true
        },
        selectedBackgroundColor: '#FF7452',
    },
    {
        label: "Newest",
        value: "newest",
        selectedBackgroundColor: "#FF7452"
    }
];

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

export default function ListProduct() {
    return (
        <div className='flex mt-12'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-semibold'>
                    Our Products
                </h1>
                <div  className='h-14 p-2 font-semibold bg-white rounded-full shadow-xl shadow-slate-300 mt-10 w-80'>
                    <SwitchSelector
                       
                        // onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#ffffff"}
                        fontColor={"#FF7452"}

                    />
                </div>

            </div>

        </div>
    )
}
