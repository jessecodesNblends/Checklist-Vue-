<template>
  <v-container>
    <app-task>
      <v-list color="yellow">
        <v-list-item ma-0 v-for="(task, index) in tasks" v-bind:key="index">
          <v-checkbox v-bind:label="task" v-on:click.native='checkComplete(index)'></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn text v-on:click.native='deleteTask(index)'>
            <v-icon>delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </app-task>
  </v-container>
</template>

<script>
import Task from "./Task.vue";

export default {
  props: ["tasks"],
  components: {
    appTask: Task
  },
  methods: {
    deleteTask(index) {
      this.$emit("deleteTask", index);
    },
    checkComplete(index) {
      this.$emit("completeTask", index);
    }
  }
};
</script>