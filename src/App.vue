<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card color="#FFEB3B" class="elevation-12">
              <app-nav-bar></app-nav-bar>
              <app-task-list v-bind:tasks="tasks" v-on:deleteTask="deleteTask" v-on:checkComplete='checkComplete'></app-task-list>
              <app-new-task v-on:newTask="addTask"></app-new-task>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TaskList from "./components/TaskList.vue";
import NewTask from "./components/NewTask.vue";

export default {
  name: "App",
  components: {
    appNavBar: Navbar,
    appTaskList: TaskList,
    appNewTask: NewTask
  },
  data: function() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      for (var i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i]);
      }
    },
    checkComplete(index) {
      this.tasks.splice(index, 1);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      console.log(index);
    }
  }
};
</script>
