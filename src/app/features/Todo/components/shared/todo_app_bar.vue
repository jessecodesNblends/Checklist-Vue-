<template>
  <div>
    <v-toolbar align="center" color="#FBC02D">
      <v-toolbar-title>
        <span class="font-weight-bold pl-3">CheckList</span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      dialog: false,
      task: '',
    };
  },
  methods: {
    newTask() {
        this.$emit('newTaskAdded', this.task);
        this.task = ''
    }
  }
};
</script>