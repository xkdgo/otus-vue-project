<script>
export default {
  data() {
    return {
      message: "Hello OTUS!",
    };
  },
};
</script>

<template>
  <h1 class="header">{{ message }}</h1>
</template>
<style scoped>
.header {
  margin-top: 2rem;
  margin-left: 1rem;
}
</style>
