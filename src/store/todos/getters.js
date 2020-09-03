import {GET_TODOS} from "./types"

export const getters = {
    [GET_TODOS]: state => {
        return state.todos
    }
}