<template>
  <q-card class="q-pa-md q-ma-md box-shadow-example-accentColor border-accentColor"
    style="min-width: 200px; max-width: 500px">
    <div class="q-mb-md">
      <q-carousel v-model="slide" infinite transition-prev="jump-right" transition-next="jump-left" swipeable animated
        control-color="accent" prev-icon="arrow_left" next-icon="arrow_right" navigation-icon="radio_button_unchecked"
        navigation-active-icon="radio_button_checked" navigation padding arrows height="calc(200px + 10vw)"
        class="text-white shadow-0 rounded-borders bg-glass-black">
        <q-carousel-slide v-for="(img, index) in work.imgPaths" :key="img" :name="index + 1" class="flex justify-center"
          style="width: 100%;"><img v-bind:src="`works_imgs/${img}.webp`" style="height: 100%;"
            class="non-selectable rounded-borders" /></q-carousel-slide>
      </q-carousel>
    </div>
    <div class="my-card-text text-weight-regular">
      <div class="flex q-gutter-x-sm q-gutter-y-sm q-mb-lg h6">
        <q-btn v-for="tag in work.tags" :key="tag" no-caps color="accent" class="q-pa-xs row rounded-borders"
          style="max-width: 180px" @click="typeOfFillter = tag">
          <div class="col-6" style="min-width: 64px">
            {{ $t(tag?.[0]) }}
          </div>
          <q-icon :name="tag?.[1]" size="sm" class="q-pl-md col-2" />
        </q-btn>
      </div>
      <!-- <div class="flex q-gutter-x-md q-gutter-y-md q-mb-lg h6">
        <q-btn v-for="stackUsedForWork in work.stackUsedForWork" :key="stackUsedForWork" no-caps
          class="q-pa-xs row rounded-borders h7" style="max-width: 180px" @click="typeOfFillter = tag">
          <div class="col-6" style="min-width: 64px">
            {{ $t(stackUsedForWork?.[0]) }}
          </div>
          <q-icon :name="stackUsedForWork?.[1]" size="sm" class="q-pl-md col-2" />
        </q-btn>
      </div> -->
      <div class="q-mt-lg">
        <div class="h4">
          {{ work.title?.[i18nLocale.locale.value] }}
        </div>
        <div class="h6">
          {{ $t("portcard_work_madeFor") }}: {{ work.madeFor?.[i18nLocale.locale.value] }}
        </div>
        <div class="h5 q-pt-md">
          {{ work.descriptionShort?.[i18nLocale.locale.value] }}
        </div>
      </div>
    </div>
    <q-card-actions align="right">
      <q-btn class="text-capitalize" @click="showCardDialog = true" color="accent">{{ $t("button_ShowMore") }}</q-btn>
    </q-card-actions>
  </q-card>
  <PortCards_Card_Dialog v-model="showCardDialog" :work="work"></PortCards_Card_Dialog>
</template>

<script setup>
import PortCards_Card_Dialog from "./PortCards_Card_Dialog.vue";
const showCardDialog = ref(false);
defineOptions({
  name: "PortCards_Card",
});

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();
console.log(i18nLocale.locale.value); // "en-US"

// Get info about 1 work
const props = defineProps({
  work: {
    type: Object,
  },
});

// {
//   /* <div v-for="img in work.imgPaths" :key="img">
//           <img v-bind:src="`works_imgs/${img}.webp`" />
//         </div>
//         <img v-bind:src="`works_imgs/${work.thumbnail}.webp`" />

//                 <q-carousel-slide
//           v-for="(img, index) in work.imgPaths"
//           :key="img"
//           :name="index + 1"
//           :img-src="`works_imgs/${img}.webp`"
//           style="object-fit: cover"
//           ><img v-bind:src="`works_imgs/${img}.webp`"
//         /></q-carousel-slide>

//         */
// }

import { ref } from "vue";

const slide = ref(1);
</script>
