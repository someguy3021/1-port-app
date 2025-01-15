<template>
  <q-item clickable :to="props.link.toString()" v-if="props.isHeader == false">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(props.title) }}</q-item-label>
      <q-item-label caption v-if="props.caption">{{ $t(props.caption) }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item class="q-mx-none rounded-borders" style="width: 120px;" :to="`${$route.path + props.link.toString()}`"
    v-if="props.isHeader == true">
    <q-item-section style="flex: auto; align-items: center" v-if="props.icon" avatar no-wrap>
      <q-icon size="xs" :name="props.icon" />
      <q-item-label no-wrap style="text-align: center; min-width: 20px">{{
        $t(props.title)
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

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
    default: '',
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
  isHeader: {
    type: Boolean,
    default: false, // Default to false if not specified
  },
});
</script>

<style>
.q-item__section--side {
  padding-right: 0px;
}
</style>