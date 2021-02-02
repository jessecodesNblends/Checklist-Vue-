<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card color="#FFEB3B" class="elevation-12">
              <app-todo></app-todo>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Todo from './features/Todo/todo.vue'
export default {
  name: "App",
  components: {
    'app-todo': Todo,
  },
};
</script>
