<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-tabs>
          <q-route-tab to="/" label="Hello-Otus" />
          <q-route-tab to="/about" label="About" />
          <q-route-tab to="/vue-docs" label="Vue" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>

  </q-layout>
</template>

<style scoped>

</style>
