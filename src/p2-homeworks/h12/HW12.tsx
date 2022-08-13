import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from './bll/themeReducer';

const themes = ['default','dark', 'sandy'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallBack = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }



    return (

        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SuperSelect style={{
                    marginBottom: '2rem',
                    fontWeight: 'bold',
                    fontSize: 'large',
                    width: 'max-content',
                    textAlign: 'center',
                    color: '#03203e',
                    backgroundColor: '#6495ed73',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '5px 5px 5px 5px'}} options={themes} value={theme} onChangeOption={onChangeCallBack}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
