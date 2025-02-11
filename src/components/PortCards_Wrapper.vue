<template>
  <div>
    <div class="wrapper_head container" v-if="showFilters">
      <!-- <div class="h2 text-center text-bold q-py-md">
        {{ $t("myportfolio") }}
      </div> -->
      <div class="h5 text-center text-bold q-pt-md q-pb-sm q-px-md">
        {{ $t("choose_a_filter_works") }}
      </div>
      <div class="wrapper_head_options">
        <div v-if="$q.screen.width >= 880"
          class="btns-container flex items-center justify-center no-wrap q-gutter-x-md q-gutter-y-md q-mb-md text-h3 q-px-lg">
          <q-btn v-for="tag in uniqueTags" :key="tag" :label="$t(tag)" no-caps class="text-subtitle1"
            :color="selectedTag === tag ? 'secondary shadow-2' : 'accent'" @click="selectedTag = tag" />

          <q-icon name="close" size="md" class="q-ml-md cursor-pointer rounded-borders" v-ripple @click="clearFilter" />
        </div>
        <div v-else class="row flex-center q-mb-md no-wrap q-px-lg">
          <q-select v-model="selectedTag" :options="tagOptions" :label="$t('filter')" label-color="secondary" dense
            class="full-width" :label-fn="(tag) => $t(tag)" emit-value map-options />
          <q-icon name="close" size="md" class="q-ml-md cursor-pointer rounded-borders" v-ripple @click="clearFilter" />
        </div>
      </div>
    </div>
    <div class="wrapper_cards">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div class="flex justify-center">
          <PortCards_Card v-for="(work, index) in filteredWorks" :key="index" :work="work" :selectedTag="selectedTag"
            @emit-filter-by-tag="handleFilterByTag" />
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script setup>
// Load works from DB into workArrayFull and ONLY 5 works from workArrayFull into workArrayForHandling and handle howMuchWorksToShow, filter functions, load 5 more works onLoad
import PortCards_Card from "./PortCards_Card.vue";
import { works } from "../stores/DB_copies.json";
// import { works_dev } from "../stores/DB_dev.json";
import { ref, onMounted, computed } from "vue";

defineOptions({
  name: "PortCards_Wrapper",
});

// Get info about how much works to show on page, also added showFilters
const props = defineProps({
  howMuchWorksToShow: {
    type: Number,
    required: false,
  },
  showFilters: {
    type: Boolean,
    required: false
  }
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
const selectedTag = ref(null);
const uniqueTags = computed(() => {
  const tags = new Set();
  worksData.value.forEach(work => {
    if (work.tags && Array.isArray(work.tags)) {
      work.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags);
});
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const tagOptions = computed(() => {
  return uniqueTags.value.map(tag => ({ label: t(tag), value: tag }));
});

const filteredWorks = computed(() => {
  if (!selectedTag.value) {
    return worksData.value;
  }
  return worksData.value.filter(work => work.tags && Array.isArray(work.tags) && work.tags.includes(selectedTag.value));

});

function clearFilter() {
  selectedTag.value = null;
}

function handleFilterByTag(tag) {
  selectedTag.value = tag;
}

const scrollWorks = ref([])
scrollWorks.value = filteredWorks.value.slice(0, 5)

const onLoad = (index, done) => {
  if (props.howMuchWorksToShow === null || props.howMuchWorksToShow === undefined) {
    setTimeout(() => {
      const newWorks = filteredWorks.value.slice(0, 5).filter(work => !scrollWorks.value.includes(work))
      scrollWorks.value.push(...newWorks, ...Array(5).fill({}))
      done()
    }, 2000)
  } else {
    done()
  }
}
</script>