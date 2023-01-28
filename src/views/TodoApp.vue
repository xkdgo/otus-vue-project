<template>
  <!-- <color-header :text="someText" @my-custom-update="handler($event)"></color-header>
  <color-header></color-header>
  <color-header text="my another text"></color-header> -->
  <!-- <color-header></color-header> -->
  <div class="todo">
    <section class="todoapp">
      <todo-header></todo-header>
      <todos :todos="todos" @set-is-completed="setIsComleted"></todos>
      <todo-footer></todo-footer>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoHeader from "@/components/Todo/TodoHeader.vue";
import Todos from "@/components/Todo/Todos.vue";
import TodoFooter from "@/components/Todo/TodoFooter.vue";
// export default { components: { ColorHeader } };
// const counter = computed((todos) => (()
const someText = ref("someTextText");
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
const counter = ref(10);
// function getText() {return someText}
function handler(payload) {
  someText.value = payload;
}
function setIsComleted({ id, val }) {
  todos.value.find((todo) => todo.id === id).isCompleted = val;
}
</script>

<style scoped>
.todoapp {
  box-sizing: content-box;
}
</style>
