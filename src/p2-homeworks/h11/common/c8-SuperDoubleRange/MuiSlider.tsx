import * as React from 'react';
import Slider from '@mui/material/Slider';
import '../OblivionLoadingStyle'
import {oblivionLoadingStyle} from '../OblivionLoadingStyle';

function valuetext(value: number) {
    return `${value}`;
}

const minDistance = 1;


type PropsType = {
    value: [number, number]
    setValue: (value: [number, number]) => void
}

export default function MinimumDistanceSlider({value , setValue}: PropsType) {

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <div>
            <Slider
                sx={oblivionLoadingStyle}
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </div>
    );
}
