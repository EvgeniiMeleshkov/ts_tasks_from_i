import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
            <SuperInputText error={error} onKeyUp={onEnterPressUpCallBack} value={name} onChange={setNameCallback} className={inputClass}/>

            {error === '' && name.match(/\w|\W/)
                ? <SuperButton className={buttonClass} onClick={addUser}>add</SuperButton>
                : <SuperButton className={buttonClass} disabled={true}>Enter valid name</SuperButton>
            }
            <span className={s.totalUsersSpan}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
