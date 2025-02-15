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
          <q-btn v-for="tag in uniqueTags" :key="tag" :label="$t(tag)" no-caps push class="text-subtitle1"
            :color="selectedTag === tag ? 'secondary shadow-2' : 'accent'" @click="handleTagClick(tag)" />

          <q-btn round push color="dark" icon="close" @click="clearFilter" />
        </div>
        <div v-else class="row flex-center q-mb-md no-wrap q-px-lg">
          <q-select v-model="selectedTag" :options="tagOptions" :label="$t('filter')" label-color="secondary" dense
            class="full-width" :label-fn="(tag) => $t(tag)" emit-value map-options />
          <q-btn round push color="dark" class="q-ml-md" icon="close" @click="clearFilter" />
        </div>
      </div>
    </div>
    <div class="wrapper_cards">
      <q-infinite-scroll @load="onLoad" :offset="850">
        <div class="flex justify-center">
          <PortCards_Card v-for="work in (wrapperIsNotStatic ? filteredWorks : scrollWorks)" :key="work.id" :work="work"
            :selectedTag="selectedTag" @emit-filter-by-tag="handleFilterByTag"
            :wrapperIsNotStatic="wrapperIsNotStatic" />
        </div>
        <div v-if="wrapperIsNotStatic" class="flex items-center justify-center">
          <q-btn class="q-mt-md h6" color="accent" icon-right="search" :label="$t('show_more_of_my_works')"
            :to="{ path: './works' }" />
        </div>
        <div v-if="allWorksAreLoaded" class="all_is_loaded flex items-center justify-center">
          <q-btn class="q-mt-md" color="dark" icon-right="search" :label="$t('works_allWorksLoaded')" disable />
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
// Load works from DB into workArrayFull and handle howMuchWorksToShow + filterstuff and workArrayFullFiltered, and ONLY 5 works from workArrayFullFiltered into workArrayForHandling by 5 each onLoad
import PortCards_Card from "./PortCards_Card.vue";
import { works } from "../stores/DB/DB.json";
import { works as works_dev } from "../stores/DB/DB_dev.json";
import { works as works_webdes } from "../stores/DB/DB_webdes.json";
import { ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
  },
  whatWorksToShow: {
    type: String,
    required: false,
    default: ""
  }
});

const worksData = ref([]); // this is place for works data
const wrapperIsNotStatic = computed(() => !!props.howMuchWorksToShow)

onMounted(async () => {
  getworksData();
});

async function getworksData() {
  let tempArr;
  switch (props.whatWorksToShow) {
    case 'works':
      tempArr = works;
      break;
    case 'works_dev':
      tempArr = works_dev;
      break;
    case 'works_webdes':
      tempArr = works_webdes;
      break;
    default:
      console.error('Works wrapper says: Invalid whatWorksToShow prop value, or no value at all');
      return;
  }
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

function handleTagClick(tag) {
  if (selectedTag.value === tag) {
    clearFilter();
  } else {
    selectedTag.value = tag;
  }
}

function handleFilterByTag(tag) {
  selectedTag.value = tag;
}

// scroll stuff-------------- scroll stuff-------------- scroll stuff-------------- scroll stuff-------------- scroll stuff-------------- scroll stuff--------------
const scrollWorks = ref([])
scrollWorks.value = filteredWorks.value.slice(0, 5)
// console.log(scrollWorks.value)
let currentIndex = 0;
const chunkSize = 5;
const allWorksAreLoaded = ref(false);
const onLoad = (index, done) => {
  if ((currentIndex >= filteredWorks.value.length)) {
    done(); // signal that there are no more items to load
    return;
  }

  if (props.howMuchWorksToShow == null) {
    // setTimeout(() => {
    const newWorks = filteredWorks.value.slice(currentIndex, currentIndex + chunkSize);
    const filteredNewWorks = newWorks.filter(work => {
      if (selectedTag.value) {
        return work.tags.includes(selectedTag.value);
      } else {
        allWorksAreLoaded.value = true; // TODO this works only the first time, but it should be true if only all works are loaded
        return true;
      }
    });
    const newUniqueWorks = filteredNewWorks.filter(work => !scrollWorks.value.includes(work));
    scrollWorks.value.push(...newUniqueWorks);
    currentIndex += chunkSize;
    done();
    // }, 1000);
  } else {
    done();
  }
}
// TODO behavior: 'smooth' results in mozilla bug where scroll doesn't work
watch(selectedTag, (newTag, oldTag) => {
  if (newTag !== oldTag) {
    resetScrollState();
    if (navigator.userAgent.includes('Firefox')) { handleFirefoxScroll() }
  }
})

function resetScrollState() {
  scrollWorks.value = filteredWorks.value.slice(0, 5);
  currentIndex = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFirefoxScroll() {
  scrollWorks.value = filteredWorks.value.slice(0, 5);
  currentIndex = 0;
  window.scrollTo({ top: 0 }); // TODO this is a workaround for the bug in mozilla
}

// const resetWorksScroll = () => {
//   scrollWorks.value = filteredWorks.value.slice(0, 5);
//   currentIndex = 0;
//   const scrollOptions = { top: 0, behavior: 'smooth' };
//   if (navigator.userAgent.includes('Firefox')) {
//     scrollOptions.behavior = 'auto';
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 0);
//   }
//   window.scrollTo(scrollOptions);
// }

// watch(selectedTag, (newTag, oldTag) => {
//   if (newTag !== oldTag) {
//     // Reset the scrollWorks array and currentIndex
//     scrollWorks.value = filteredWorks.value.slice(0, 5)
//     currentIndex = 0;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     if (navigator.userAgent.includes('Firefox')) {
//       scrollOptions.behavior = 'auto';
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }, 0);
//     }
//   }
// })
</script>