<template>
    <div>
        <app-bar></app-bar>
        <app-todo-list></app-todo-list>
    </div>
</template>

<script>
import AppBar from './components/shared/todo_app_bar.vue'
import TodoList from './components/todo_list/todo_list.vue'
export default {
    name: 'Todo',
    components: {
        'app-bar': AppBar,
        'app-todo-list': TodoList,
    }
}
</script>
