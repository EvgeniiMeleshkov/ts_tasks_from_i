import React, {useState} from 'react'
import Message, {MessageDataType} from "./Message";

const HW1 = () => {
    const [arr, setArr] = useState<MessageDataType[]>([{
                avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                name: 'Neco Chan',
                message: 'Ohiyo! Oni chan! ^_^',
                time: new Date().toLocaleTimeString(),
            }])
    let [v, setV] = useState<string>('')

    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            Kaway
            <hr/>
            {/*should work (должно работать)*/}
            {arr.map((m: MessageDataType, i: number) => {
                return <Message
                    key={i}
                    avatar={m.avatar}
                    name={m.name}
                    message={m.message}
                    time={m.time}
                />
            })}
            <div>
                <textarea value={v} onChange={e => setV(e.currentTarget.value)}></textarea>
                {v !== '' && v.match(/\w/) ? <button onClick={() => {
                    setArr([
                        ...arr,
                        {
                            avatar: arr[0].avatar,
                            name: arr[0].name,
                            message: v,
                            time: new Date().toLocaleTimeString(),
                        }]
                    )
                }}>send</button> : <button disabled={true}>Where is your message?</button>}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>


        </div>
    )
}

export default HW1
