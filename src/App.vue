<script setup>
import { RouterView } from "vue-router";
import { reactive } from "vue";

const routes = reactive([
  { name: "hello-otus", label: "Hello-Otus" },
  { name: "todoc", label: "TodoCSS" },
  { name: "todo", label: "Todo" },
  { name: "about", label: "About" },
]);
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-tabs>
          <q-route-tab
            v-for="(route, index) in routes"
            :key="index"
            :to="{ name: route.name }"
            :label="route.label"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
