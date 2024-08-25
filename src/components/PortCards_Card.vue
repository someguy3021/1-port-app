<template>
  <q-item>
    <q-card-section>
      <div class="my-card-text text-h6 text-weight-regular q-pb-none">
        {{ work.title?.[i18nLocale.locale.value] }}

        <li v-for="tag in work.tags" :key="tag">
          {{ tag }}
        </li>
        <div>
          <img v-bind:src="`works_imgs/${work.thumbnail}.webp`" />
        </div>
        {{ work.descriptionShort?.[i18nLocale.locale.value] }}

        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-carousel
              v-model="slide"
              infinite
              transition-prev="jump-right"
              transition-next="jump-left"
              swipeable
              animated
              control-color="white"
              prev-icon="arrow_left"
              next-icon="arrow_right"
              navigation-icon="radio_button_unchecked"
              navigation
              padding
              arrows
              height="300px"
              class="text-white shadow-1 rounded-borders"
            >
              <q-carousel-slide
                v-for="(img, index) in work.imgPaths"
                :key="img"
                :name="index + 1"
                :img-src="`works_imgs/${img}.webp`"
              />
            </q-carousel>
          </div>
        </div>
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
console.log(i18nLocale.locale.value); // "en-US"

// Get info about 1 work
const props = defineProps({
  work: {
    type: Object,
  },
});

{
  /* <div v-for="img in work.imgPaths" :key="img">
          <img v-bind:src="`works_imgs/${img}.webp`" />
        </div> */
}

import { ref } from "vue";

const slide = ref(1);
</script>
