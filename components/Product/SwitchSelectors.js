import React from 'react'
import SwitchSelector from "react-switch-selector";

const options = [
    {
        label: "Bestsellers",
        value: "bestsellers",
        value: {
            foo: true
        },
        selectedBackgroundColor: '#a855f7',
    },
    {
        label: "Newest",
        value: "newest",
        selectedBackgroundColor: "#a855f7"
    }
];

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

export default function SwitchSelectors() {
    return (
        <SwitchSelector
            // onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#ffffff"}
            fontColor={"#a855f7"}
        />
    )
}
