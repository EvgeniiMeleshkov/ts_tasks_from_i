import React from 'react'
import s from '../../../p2-homeworks/h12/HW12.module.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';

function App() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme);
    return (
            <div className={s[theme]}>
                <div>react homeworks:</div>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW5/>
            </div>
    )
}

export default App
