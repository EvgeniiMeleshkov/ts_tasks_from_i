import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: HW8ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            switch (action.payload){
                case 'up':
                    return  [...state.sort((a, b)=>a.name.localeCompare(b.name))]
                case 'down':
                    return  [...state.sort((a, b)=>b.name.localeCompare(a.name))]
                default:
                    return state
            }
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}


type HW8ActionsType = sortACType | checkACType

type sortACType = ReturnType<typeof sortAC>
type checkACType = ReturnType<typeof checkAC>
export const sortAC = (payload: string) => {
    return {
        type: 'sort',
        payload
    } as const
}
export const checkAC = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}