import React, {ChangeEvent, useState} from 'react'
import Message, {MessageDataType} from "./Message";
import styles from './HW1.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

const HW1 = () => {

//-------------------------------------------------------------------------------------
    const [arr, setArr] = useState<MessageDataType[]>([{
                avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                name: 'Neco Chan',
                message: 'Ohiyo! Oni chan! ^_^',
                time: new Date().toLocaleTimeString(),
            }])
    const [value, setValue] = useState<string>('')
//--------------------------------------------------------------------------------------
    let mappedArr = arr.map((m: MessageDataType, i: number) => {
        return (<Message
            key={i}
            avatar={m.avatar}
            name={m.name}
            message={m.message}
            time={m.time}
        />)
    })

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onButtonHandler = () => {
        setArr([
            ...arr,
            {
                avatar: arr[0].avatar,
                name: arr[0].name,
                message: value,
                time: new Date().toLocaleTimeString()
            }
        ])
        setValue('')
    }
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            {mappedArr}
            <div className={styles.text_buttonDIV}>
                <SuperInputText onEnter={ value !== '' && value.match(/\w/) ? onButtonHandler : undefined} value={value} onChange={onTextChange}></SuperInputText>
                {value !== '' && value.match(/\W|\w/)
                    ? <SuperButton onClick={onButtonHandler}>send</SuperButton>
                    : <SuperButton disabled={true}>Where is your message?</SuperButton>}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>


        </div>
    )
}

export default HW1
