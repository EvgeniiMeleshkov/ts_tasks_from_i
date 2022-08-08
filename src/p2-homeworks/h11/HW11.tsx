import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onTopSliderChanged = (value: number) => {
        if (value <= value2) {
            setValue1(value)
            setDoubleVal([value, value2])
        }

    }

    const setDoubleValue = (value: [number, number]) => {
        if (value1 >= value2) {
            return
        }
        setValue1(value[0])
        setValue2(value[1])
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
                    <span>{value1}</span>
                    <SuperRange value={value1}
                                onChangeRange={onTopSliderChanged}

                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange value={doubleVal} onChangeRange={setDoubleValue}

                    />
                    <span>{value2}</span>
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
