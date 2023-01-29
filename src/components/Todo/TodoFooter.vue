<template>
  <footer class="footer">
    <span class="todo-count"> {{ props.count }} left </span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/all">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
      <li>
        <a class="clear-completed">Clear completed</a>
      </li>
    </ul>
  </footer>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["count"]);
</script>
<style scoped>
.filters li {
  display: inline;
}

.filters li a,
.filters li .clear-completed {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover,
.filters li .clear-completed:hover {
  border-color: rgba(173, 170, 170, 1);
  text-decoration: none;
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 2);
}
</style>
