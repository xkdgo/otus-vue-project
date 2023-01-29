<template>
  <!-- <color-header :text="someText" @my-custom-update="handler($event)"></color-header>
  <color-header></color-header>
  <color-header text="my another text"></color-header> -->
  <!-- <color-header></color-header> -->
  <div class="todo">
    <section class="todoapp">
      <todo-header @add-todo="addNewTodo"></todo-header>
      <todos
        :todos="todos"
        @set-is-completed="setIsComleted"
        @delete-todo="deleteToDo"
      ></todos>
      <todo-footer :count="countLeft"></todo-footer>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TodoHeader from "@/components/Todo/TodoHeader.vue";
import Todos from "@/components/Todo/Todos.vue";
import TodoFooter from "@/components/Todo/TodoFooter.vue";

const todos = ref([
  {
    id: 1,
    text: "first todo",
    isCompleted: false,
  },
  {
    id: 2,
    text: "second todo",
    isCompleted: true,
  },
  {
    id: 3,
    text: "third todo",
    isCompleted: false,
  },
]);
const countLeft = computed(() => todos.value.filter((t) => !t.isCompleted).length);

// function getText() {return someText}
function addNewTodo(payload) {
  todos.value.push({
    id: todos.value.length + 1,
    text: payload,
    isCompleted: false,
  });
}
function setIsComleted({ id, val }) {
  todos.value.find((t) => t.id === id).isCompleted = val;
}

function deleteToDo(id) {
  for (var i = 0; i < todos.value.length; i++) {
    if (todos.value[i].id === id) {
      todos.value.splice(i, 1);
      i--;
    }
  }
}
</script>

<style scoped>
.todoapp {
  box-sizing: content-box;
}
</style>
