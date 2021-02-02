
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        todos: [
            {id: 1, title: 'Task 1', done: true},
            {id: 2, title: 'Task 2', done: false},
            {id: 3, title: 'Task 3', done: true},
        ]
    },
    getters: {
        getTodoById: (state) => (id) => {
            state.todos.find(todo => todo.id === id)
        }
    }
})