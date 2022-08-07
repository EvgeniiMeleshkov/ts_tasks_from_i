import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}`;
}
type PropsType = {
    value: [number, number]
    setValue: (value: [number, number]) => void
}
export default function RangeSlider({value, setValue}: PropsType) {


    const handleChange = (event: Event, newValue: number | number[]) => {
        if(Array.isArray(newValue) && newValue.length === 2)
        setValue([newValue[0], newValue[1]]);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}
