<template>
  <q-page class="container flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px" />
    <q-btn :label="$t('failed')" />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "Webdes_ServicesPage",
});
</script>
