<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todo-item
        v-for="todo in props.todos"
        :key="todo.id"
        :todo="todo"
        @set-is-completed="isCompleted(todo.id, $event)"
        @delete-todo="$emit('delete-todo', $event)"
      ></todo-item>
    </ul>
  </section>
</template>
<script setup>
import TodoItem from "@/components/Todo/TodoItem.vue";

const props = defineProps(["todos"]);
const emit = defineEmits(["set-is-completed", "delete-todo"]);
function isCompleted(id, val) {
  emit("set-is-completed", {
    id: id,
    val: val,
  });
}
</script>
<style scoped></style>
