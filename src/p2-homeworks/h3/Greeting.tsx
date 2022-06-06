import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnterPressUpCallBack: (e: KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPressUpCallBack} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.someClass// need to fix with (?:)
    const buttonClass = error !== '' ? s.errorButton : s.normButton
    return (
        <div className={s.mainDiv}>
            <input onKeyUp={onEnterPressUpCallBack} value={name} onChange={setNameCallback} className={inputClass}/>

            {error === '' && name.match(/\w/)
                ? <button className={buttonClass} onClick={addUser}>add</button>
                : <button className={buttonClass} disabled={true}>Enter valid name</button>
            }
            <span className={s.totalUsersSpan}>{totalUsers}</span>
            <div><span className={s.errorText}>{error}</span></div>

        </div>
    )
}

export default Greeting
