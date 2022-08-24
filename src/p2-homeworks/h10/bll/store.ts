import {loadingReducer} from './loadingReducer'
import { combineReducers, createStore } from 'redux'
import {themeReducer} from '../../h12/bll/themeReducer';
import {Hw13Reducer} from '../../h13/hw13Reducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    toggle: Hw13Reducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
