import React from 'react'
import s from './Error404.module.css'
import Keanu from '../../../assets/Keanu.png'
import leo from '../../../assets/leo.png'

function Error404() {
    return (
        <div className={s.main}>
            <div className={s.textError}>
                <div>404</div>
                <div>Page not found! 🙂</div>
            </div>
            <span>
                <img alt={''} className={s.leo} src={leo}/>
                <img alt={''} className={s.keanu} src={Keanu}/>
            </span>
        </div>
    )
}

export default Error404
