<template>
  <q-page class="container">
    <PortCards_Wrapper :showFilters="true" :whatWorksToShow="`works_dev`" />
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";
defineOptions({
  name: "Dev_WorksPage",
});
</script>
