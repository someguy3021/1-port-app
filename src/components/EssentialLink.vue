<template>
  <q-item clickable :to="combinedLink" v-if="props.isHeader == false" exact>
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(props.title) }}</q-item-label>
      <q-item-label caption v-if="props.caption">{{ $t(props.caption) }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item class="q-mx-none rounded-borders" style="width: 120px;" :to="combinedLink" v-if="props.isHeader == true"
    exact>
    <q-item-section style="flex: auto; align-items: center" v-if="props.icon" avatar no-wrap>
      <q-icon size="xs" :name="props.icon" />
      <q-item-label no-wrap style="text-align: center; min-width: 20px">{{
        $t(props.title)
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// const combinedLink = computed(() => {
//   // Determine the parent path based on the current route
//   let parentPath = '';

//   // Check if the current route is under /dev or /webdes
//   if (route.path.startsWith('/dev')) {
//     parentPath = '/dev'; // Parent path for any route under /dev
//   } else if (route.path.startsWith('/webdes')) {
//     parentPath = '/webdes'; // Parent path for any route under /webdes
//   }

//   // If no parent path is found, you can set a default or return null
//   if (!parentPath) {
//     return null; // Or you could set a default path like '/'
//   }

//   // Combine parent path with additional info from props.link
//   return {
//     path: parentPath + props.link.toString(), // Concatenate the paths
//   };
// });

const combinedLink = computed(() => {
  // Check if there is a parent route
  const matchedRoutes = route.matched;

  // If there are at least two matched routes, the second last one is the parent
  if (matchedRoutes.length > 1) {
    const parentRoute = matchedRoutes[matchedRoutes.length - 2];
    return parentRoute.path + props.link.toString(); // Return the parent's path
  }

  // If no parent found, return a default path or null
  return '/'; // Default fallback path
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
    default: "language",
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