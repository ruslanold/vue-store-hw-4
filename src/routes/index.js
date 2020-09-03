import Home from '../components/Home.vue'
import Todo from '../components/Todo.vue'

export const routes = [
    {
        path: "", component: Home, name: "Home"
    },
    {
        path: "/todos", component: Todo, name: "Todo"
    }
]