<template>
  <q-page class="container">
    <PortCards_Wrapper :showFilters="true" :whatWorksToShow="`works_webdes`" />
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";
defineOptions({
  name: "Webdes_WorksPage",
});
</script>
