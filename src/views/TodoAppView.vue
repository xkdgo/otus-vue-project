<template>
  <div id="todo">
    <h1>TodoApp</h1>
    <ul class="todo">
      <li v-for="(item, index) in items" :key="index">
        <span class="remove" @click="removeItem(item)">&times;</span>
        <td>{{ item }}</td>
      </li>
    </ul>
    <hr />
    <div>
      <input v-model="item" placeholder="enter todo" />
      <button @click="addItem">Add</button>
    </div>
  </div>
</template>
<style scoped>
#todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 32px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #aaa;
  padding: 32px;
}
hr {
  margin: 20px 0;
}
h1 {
  font-size: 32px;
}
input {
  padding: 12px;
}
button {
  padding: 12px;
}
ul {
  list-style-type: none;
  text-align: left;
  margin-top: 12px;
}
ul > li {
  padding: 12px;
  border-top: 1px solid #666;
}
ul > li:last-child {
  border-bottom: 1px solid #666;
}
.remove {
  cursor: pointer;
  float: right;
  color: red;
}
</style>
<script setup>
import { ref } from "vue";

const item = ref("");
const items = ref([
  "Создайте стили для заголовка",
  "Создайте стили для списка дел",
  "Создайте стили для элементов формы",
  "По необходимости добавляйте классы к элементам",
  "** Добавьте выравнивание вправо для класса remove",
]);

function addItem() {
  items.value.push(item.value);
}
// function updateItem(idx, name) {
//   items = items.map((e, index) => (idx = index ? name : e));
// }

function removeItem(theitem) {
  items.value = items.value.filter((e) => e !== theitem);
}
</script>
