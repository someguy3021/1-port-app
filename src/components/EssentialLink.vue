<template>
  <q-item clickable :to="props.link.toString()">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(props.title) }}</q-item-label>
      <q-item-label caption>{{ $t(props.caption) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
    required: false,
  },

  link: {
    type: String,
    default: "",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
