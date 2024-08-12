<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
  created() {
    this.$q.dark.set(false);
  },
});
</script>

<!-- Todo add works with DB as json an a system of tags -->