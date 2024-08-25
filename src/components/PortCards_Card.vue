<template>
  <q-card class="q-pa-md q-ma-md" style="min-width: 300px">
    <div class="q-pb-md">
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
        <q-carousel-slide></q-carousel-slide>
        <q-carousel-slide
          v-for="(img, index) in work.imgPaths"
          :key="img"
          :name="index + 1"
          :img-src="`works_imgs/${img}.webp`"
        />
      </q-carousel>
    </div>
    <div class="my-card-text text-h6 text-weight-regular q-pb-none">
      <div class="flex q-gutter-x-md q-gutter-y-md q-mb-lg text-h3">
        <q-btn
          v-for="tag in work.tags"
          :key="tag"
          no-caps
          color="accent"
          class="q-pa-xs row rounded-borders"
          style="min-width: 160px"
          @click="typeOfFillter = tag"
        >
          <div class="col-6" style="min-width: 50px">{{ $t(tag?.[0]) }}</div>
          <q-icon :name="tag?.[1]" size="sm" class="col-2"
        /></q-btn>
      </div>
      <div>
        <div class="th-scalabletext-var1-h4">
          {{ work.title?.[i18nLocale.locale.value] }}
        </div>
        <div class="th-scalabletext-var1-h6">
          {{ work.descriptionShort?.[i18nLocale.locale.value] }}
        </div>
      </div>
    </div>
  </q-card>
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
        </div>
        <img v-bind:src="`works_imgs/${work.thumbnail}.webp`" /> */
}

import { ref } from "vue";

const slide = ref(1);
</script>
