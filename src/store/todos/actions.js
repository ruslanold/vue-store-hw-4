import { ADD_TODO_ACTION, 
         REMOVE_TODO_ACTION, 
         REMOVE_MSG_ACTION, 
         ADD_TODO, 
         REMOVE_TODO, 
         REMOVE_MSG 
        } from "./types"

import Vue from 'vue'

export const actions = {
    [ADD_TODO_ACTION]: async ({ commit }, value) => {
        try {
            let { body } = await Vue.http.post(`https://jsonplaceholder.typicode.com/posts`, value)
            commit(ADD_TODO, body)
        } catch (error) {
            console.log(error)
        }

    },
    [REMOVE_TODO_ACTION]: async ({ commit }, id) => {
        try {
            let result = await Vue.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (result.ok) {
                commit(REMOVE_TODO, id)
            }
        } catch (error) {
            console.log(error)
        }
    },
    [REMOVE_MSG_ACTION]: async ({ commit }, index) => {
        try {
            commit(REMOVE_MSG, index)
        } catch (error) {
            console.log(error)
        }
    }
}