<template>
  <q-item>
    <q-card-section>
      <div class="my-card-text text-h6 text-weight-regular q-pb-none">
        {{ work.title?.[i18nLocale.locale.value] }}
        <div>{{ i18nLocale.locale.value }}</div>
      </div>
    </q-card-section>
  </q-item>
</template>
  
<script setup>
defineOptions({
  name: "PortCards_Card",
});

console.log("Got work");

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();
console.log(i18nLocale.locale.value); // "en"

// Get info about 1 work
const props = defineProps({
  work: {
    type: Object,
  },
});
</script>
  