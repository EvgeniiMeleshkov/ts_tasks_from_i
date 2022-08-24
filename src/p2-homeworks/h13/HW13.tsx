import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {hw13Api} from './api';
import {AppStoreType} from '../h10/bll/store';
import {setTextAC, toggleCheckedAC} from './hw13Reducer';

const Hw13 = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false)
    const [errorText, setErrorText] = useState('')
    const dispatch = useDispatch()
    //const val = useSelector<AppStoreType, boolean>(state => state.toggle.checked)
    //...
    const text = useSelector<AppStoreType, string>(state => state.toggle.text)


    const onToggle = () => {
        hw13Api.check(checkBoxValue)
            .then(res => {
                console.log(res)
                dispatch(setTextAC(res.data.info))
                dispatch(toggleCheckedAC(checkBoxValue))
                setErrorText(res.data.errorText)
            })
            .catch((rej) => {
                console.log(rej.response.data.info)
                dispatch(setTextAC(rej.response.data.info))
                setErrorText(rej.response.data.errorText)
            })
    }

    return (
        <div>
            <div>
                <label>{errorText}</label>
            </div>
            <div>
                <label>{text}</label>
            </div>

            <SuperButton onClick={onToggle}>Check</SuperButton>
            <SuperCheckbox checked={checkBoxValue} onChange={(event) => setCheckBoxValue(event.currentTarget.checked)}/>
        </div>
    );
};

export default Hw13;