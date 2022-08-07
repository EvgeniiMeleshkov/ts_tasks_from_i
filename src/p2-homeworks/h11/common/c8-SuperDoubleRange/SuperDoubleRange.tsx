import React from 'react'
import RangeSlider from './MuiSlider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    return (
        <>
            <div>
                <RangeSlider value={value!} setValue={onChangeRange!} />
            </div>
        </>
    )
}

export default SuperDoubleRange
