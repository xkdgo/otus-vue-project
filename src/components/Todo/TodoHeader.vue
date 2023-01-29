<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      v-model="newTodo"
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    />
  </header>
</template>
<script setup>
import { ref } from "vue";

const newTodo = ref("");
const emit = defineEmits();
function addTodo() {
  emit("add-todo", newTodo.value);
  // clean value in the input after emit
  newTodo.value = "";
}
</script>
<style scoped>
h1 {
  top: -180px;
}
</style>
