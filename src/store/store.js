import Vue from 'vue'
import Vuex from 'vuex'
import {todolist, todoModule} from "@/store/todos/todos";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    [todoModule]: todolist
  }
})
