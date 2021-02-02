<template>
  <v-container>
    <app-task>
      <v-list color="yellow">
        <v-item-group v-for="(todo, index) in getTodos" v-bind:key="index">
          <v-list-item>
          <v-checkbox
          v-model="todo.done"
          :label="todo.title"></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn class="mr-2">
            <v-icon color="green">list</v-icon>
          </v-btn>
          <v-btn>
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        </v-item-group>
      </v-list>
    </app-task>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    }
  },
}
</script>
