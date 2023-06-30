const initState = {
    themeId: 1,
}

export type ActionsType = ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionsType): {themeId:number} => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: +action.id}
        }
        default:
            return state
    }
}
export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: string): {type:string, id:string} => ({ type: 'SET_THEME_ID', id })


