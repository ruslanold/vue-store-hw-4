<template>
  <div>
    <h1>Posts</h1>
    
    <input 
      type="text" 
      placeholder="email" 
      v-model="todo.email" 
    />
    <br />
    
    <input 
      type="text" 
      placeholder="title" 
      v-model="todo.title" 
    />
    <br />
    
    <input 
      type="text" 
      placeholder="body" 
      v-model="todo.body" 
    />
    <br />

    <button @click="add">Send</button>
    <br />
    <p>Усього: {{todos.length}} todos</p>
    <br />
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <br />

        <div v-if="todo.msg">{{todo.msg}}</div>
        <div v-else>
          <span>email: {{todo.email}} </span>
          <span>title: {{todo.title}} </span>
          <span>body: {{todo.body}}</span>
        </div>

        <button 
          v-if="!todo.msg" 
          @click="todo.isShow ? todo.isShow = false : todo.isShow = true" 
        >
          edit
        </button> 
        
        <button 
          v-if="!todo.msg"
          @click="remove(todo.id)"
        >
          delete
        </button>
        
        <button
          v-else
          @click="rmMsg(i)"
        >
          X
        </button>

        <EditTodo 
          @isshow="todo.isShow = false" 
          :todo="todo" 
        />
      </li>
    </ul>
  </div>
</template>
<script>

import EditTodo from "./EditTodo.vue"
import {createNamespacedHelpers} from "vuex" 
import {todoModule} from "@/store/todos/todos" 
import {ADD_TODO_ACTION, REMOVE_TODO_ACTION, REMOVE_MSG_ACTION, GET_TODOS} from "@/store/todos/types"

const {mapActions, mapGetters} = createNamespacedHelpers(todoModule)

export default {
  name: "Contacts",
  components: {
    EditTodo
  },

  data() {
    return {
      todo: {
        email: "",
        title: "",
        body: ""
      }    
    };
  },
  computed: {
    ...mapGetters({
      todos: GET_TODOS
    })
  },

  methods: {

    ...mapActions({
      addTodo: ADD_TODO_ACTION,
      removeTodo: REMOVE_TODO_ACTION,
      removeMsg: REMOVE_MSG_ACTION
    }),


    async add(){
      try {
        await this.addTodo(this.todo)
      } catch (error) {
        console.log(error);
      }
    },

    async remove(id){
      try {
        await this.removeTodo(id)
      } catch (error) {
        console.log(error);
      }
    },

    rmMsg(i){
      this.removeMsg(i)
    }

  },
};
</script>
<style scoped></style>