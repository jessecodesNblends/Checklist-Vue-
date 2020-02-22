<template>
  <div align="center">
    <v-btn fab large color="black" v-on:click="dialog = true">
      <v-icon color="yellow">add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title align="center">
          <span class="headline">Add Task</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-text-field v-model="task"></v-text-field>
              <p>{{ task }}</p>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn large color="#FBC02D" v-on:click.prevent="newTask">Add Task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            dialog: false,
            task: '',
        }
    },
    methods: {
        newTask() {
            if(this.task.length === 0){
                return;
            }
            this.$emit('newTask', this.task);
            this.task = '';
            this.dialog = false;
        }
    }
}
</script>