import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortState = [...state]
            return [...sortState.sort((a, b) => {
                if (action.payload === "up") {
                    if (a.name > b.name) {
                        return 1
                    } else return -1
                } else if (action.payload === "down") {
                    if (a.name < b.name) {
                        return 1
                    } else return -1
                } else return 1
            })] // need to fix
        }
        case 'check': {
            return state.filter(el=> el.age>=18) // need to fix
        }
        default:
            return state
    }
}
