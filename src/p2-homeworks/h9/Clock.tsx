import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h12/HW12.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() // fix with date
    const stringDate = date?.toLocaleDateString() // fix with date

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{height: '50px',display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold',

                textShadow: '1px 1px 1px #86B3FF',
                backgroundColor: 'transparent'
            }} className={s[theme]}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
