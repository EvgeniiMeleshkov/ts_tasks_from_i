import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {InitialStateType, loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import ghost from '../../assets/1479.gif'



function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, InitialStateType>((store) => {return store.loading})
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
        console.log('loading...')
    };


    return (
        <div>
            homeworks 10

            {/*should work (должно работать)*/}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {loading.isLoading
                    ? (
                        <div style={{marginTop: '-25px'}}><img alt={''} src={ghost}/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
