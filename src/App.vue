<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
  created() {
    this.$q.dark.set(true);
  },
});

import { useQuasar } from 'quasar';
import { onBeforeMount } from 'vue';

const $q = useQuasar();

// Show loading animation when the component mounts
onBeforeMount(() => {
  $q.loading.show({
    delay: 400 // Delay to prevent flicker on fast operations
  });

  // Simulate an asynchronous operation (like fetching data)
  setTimeout(() => {
    // Hide loading animation after the operation completes
    $q.loading.hide();
  }, 1000); // Adjust this duration as needed for your async task
});

// app.config.errorHandler = (err) => {
//   /* обработка ошибки */
//   /* i didn't check if that thing could work, cause there should be createApp for it, but it is nowhere to be found in the proj. In a case if that works, this should i guess reload the page in case of some errors, especially render error i guess, cause i had it once when switching tabs or smthn */
// }
</script>