export type ThemeReducerInitStateType = {
    theme: string
}

const initState = {
    theme: 'default'
};

export const themeReducer = (state: ThemeReducerInitStateType = initState, action: ThemeReducerActionType): ThemeReducerInitStateType => { // fix any
    switch (action.type) {
        case 'SWITCH_THEME': {
            return {...state, theme: action.payload.theme};
        }
        default: return state;
    }
};
type ThemeReducerActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string): { type: 'SWITCH_THEME', payload: {theme: string} } => {
    return {
        type: 'SWITCH_THEME',
        payload: {
            theme
        }
    } as const
}; // fix any