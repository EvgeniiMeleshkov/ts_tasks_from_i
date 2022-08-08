import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const onTopSliderChanged = (value: number) => {
        if (value < doubleVal[1]) {
            setDoubleVal([value, doubleVal[1]])
        }
    }

    const setDoubleValue = (value: [number, number]) => {
        setDoubleVal(value)
    }
    const [doubleVal, setDoubleVal] = useState<[number, number]>([0, 100])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <span>{doubleVal[0]}</span>
                    <SuperRange value={doubleVal[0]}
                                onChangeRange={onTopSliderChanged}

                    />
                </div>

                <div>
                    <span>{doubleVal[0]}</span>
                    <SuperDoubleRange value={doubleVal} onChangeRange={setDoubleValue}

                    />
                    <span>{doubleVal[1]}</span>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
