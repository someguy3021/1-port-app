<template>
  <q-item clickable tag="a" target="_blank" :href="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(props.title) }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" }); //global since my language switch is in another component.

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
