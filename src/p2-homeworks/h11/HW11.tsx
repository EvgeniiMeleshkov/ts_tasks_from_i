import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import oblivionLogo from '../../assets/ob3041tc0c-oblivion-logo-the-elder-scrolls-iv-oblivion-logopedia-.png'
import s from './HW11.module.css'

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
                <div className={s.main}>
                    <div className={s.divForSliders}>

                        <div className={s.sliderDiv}>
                            <span className={s.digits}>{doubleVal[0]}</span>
                            <div>
                                <SuperRange value={doubleVal[0]}
                                            onChangeRange={onTopSliderChanged}/>
                            </div>

                        </div>

                        <div className={s.sliderDiv}>
                            <span className={s.digits}>{doubleVal[0]}</span>
                            <div>
                                <SuperDoubleRange value={doubleVal} onChangeRange={setDoubleValue}/>
                            </div>
                            <span className={s.digits}>{doubleVal[1]}</span>
                        </div>
                    </div>
                    <img alt='The Elder Scrolls' src={oblivionLogo} style={{height: '50px'}}/>

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
