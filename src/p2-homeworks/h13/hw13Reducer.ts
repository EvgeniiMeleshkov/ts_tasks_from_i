
type InitStateType = {
    checked: boolean
    text: string
}
const initState = {
    checked: false,
    text: ''
}

export const Hw13Reducer = (state: InitStateType = initState, action: Hw13ActionTypes): InitStateType => {
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: action.payload.checked}
        case 'SET_TEXT':
            return {...state, text: action.payload.text}
        default:
            return state
    }
}
type Hw13ActionTypes = ToggleActionType | SetTextType
type ToggleActionType = ReturnType<typeof toggleCheckedAC>
type SetTextType = ReturnType<typeof setTextAC>
export const toggleCheckedAC = (checked: boolean) => {
    return {
        type: "TOGGLE",
        payload: {
            checked
        }
    } as const
}
export const setTextAC = (text: string) => {
    return {
        type: "SET_TEXT",
        payload: {
            text
        }
    } as const
}