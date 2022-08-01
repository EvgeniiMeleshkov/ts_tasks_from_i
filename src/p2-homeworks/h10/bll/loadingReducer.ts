
export type InitialStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitialStateType = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS_LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default: return state
    }
}
type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): {type: 'IS_LOADING', payload: {isLoading: boolean}} => {
    return {
        type: 'IS_LOADING',
        payload: {
            isLoading
        }
    } as const
} // fix any