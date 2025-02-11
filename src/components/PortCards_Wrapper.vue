<template>
  <div>
    <!-- <div class="wrapper-filters">
      <div class="h2 text-bold q-pb-md">
        {{ $t("myportfolio") }}
      </div>
      <div v-if="$q.screen.width >= 880"
        class="btns-container flex items-center no-wrap q-gutter-x-md q-gutter-y-md q-mb-lg text-h3">
        <q-btn v-for="tag in uniqueTags" :key="tag" :label="tag" no-caps class="text-subtitle1" color="accent"
          @click="selectedTag = tag" />

        <q-icon name="close" size="md" class="q-ml-md cursor-pointer" v-ripple @click="clearFilter" />
      </div>
      <div v-else class="row flex-center q-mb-md no-wrap">
        <q-select standout v-model="selectedTag" :options="tagOptions" label="Фильтр" bg-color="secondary" color="black"
          class="full-width" @update:model-value="filterByTag(selectedTag)" />
        <q-icon name="close" size="md" class="q-ml-md cursor-pointer" v-ripple @click="clearFilter" />
      </div>
      <div v-else class="row flex-center q-mb-md no-wrap">
        <q-select standout v-model="typeOfFillter" :options="options" label="Фильтр" bg-color="secondary" color="black"
          class="full-width" />
        <q-icon name="close" size="md" class="q-ml-md cursor-pointer" v-ripple @click="clearFillter" />
      </div>
    </div> -->
    <div class="flex justify-center">
      <PortCards_Card v-for="work in worksData" :key="work.id" :work="work" />
    </div>
  </div>
</template>

<script setup>
import PortCards_Card from "./PortCards_Card.vue";
import { works } from "../stores/DB.json";
// import { works_dev } from "../stores/DB_dev.json";
import { ref, onMounted, computed } from "vue";

defineOptions({
  name: "PortCards_Wrapper",
});

// Get info about how much works to show on page
const props = defineProps({
  howMuchWorksToShow: {
    type: Number,
    required: false,
  },
});

const worksData = ref([]); // this is place for works data

onMounted(async () => {
  getworksData();
});

async function getworksData() {
  let tempArr = works;
  tempArr = tempArr.filter(work => work.hidden === false); // removing all the testing elements or hidden elements
  // console.log(tempArr);
  // If not getting any data about how much elements to show - show all of them
  if (
    (props.howMuchWorksToShow !== null) &
    (props.howMuchWorksToShow !== undefined)
  ) {
    worksData.value = tempArr.slice(0, props.howMuchWorksToShow);
  } else worksData.value = tempArr;
}

// filter stuff-------------filter stuff-------------filter stuff-------------filter stuff-------------filter stuff-------------filter stuff-------------
// const selectedTag = ref(null);
// const uniqueTags = computed(() => {
//   const tags = new Set();
//   worksData.value.forEach(work => {
//     if (work.tags && Array.isArray(work.tags)) {
//       work.tags.forEach(tag => tags.add(tag));
//     }
//   });
//   return Array.from(tags);
// });

// const tagOptions = computed(() => {
//   return uniqueTags.value.map(tag => ({ label: tag, value: tag }));
// });

// const filteredWorks = computed(() => {
//   if (!selectedTag.value) {
//     return worksData.value;
//   }
//   return worksData.value.filter(work => work.tags && Array.isArray(work.tags) && work.tags.includes(selectedTag.value));
// });

// function clearFilter() {
//   selectedTag.value = null;
// }
</script>