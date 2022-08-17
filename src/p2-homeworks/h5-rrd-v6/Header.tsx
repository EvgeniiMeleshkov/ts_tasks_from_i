import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css'
import {useSelector} from 'react-redux';
import { AppStoreType } from '../h10/bll/store';

function Header() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    return (
        <div className={s.slide}>
            <div style={{color: theme === 'dark'? 'cornflowerblue' : ''}} className={s.toggle}>▶︎</div>
            <div className={s.box}>
                <div className={s.link}><NavLink to={PATH.PRE_JUNIOR}>Pre Junior </NavLink></div>
                <div className={s.link}><NavLink to={PATH.JUNIOR}>Junior </NavLink></div>
                <div className={s.link}><NavLink to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink></div>
            </div>

        </div>
    )
}

export default Header
