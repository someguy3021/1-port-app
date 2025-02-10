<template>
  <q-card class="q-pb-md q-ma-md box-shadow-example-accentColor border-accentColor border-radius20"
    style="min-width: 200px; max-width: 500px">
    <!-- Card sections divs -->
    <div>
      <q-carousel v-model="slide" infinite transition-prev="jump-right" transition-next="jump-left" swipeable animated
        control-color="dark" prev-icon="arrow_left" next-icon="arrow_right" navigation-icon="radio_button_unchecked"
        navigation-active-icon="radio_button_checked" control-type="regular" :navigation="work.imgPaths.length > 1"
        :arrows="work.imgPaths.length > 1" height="calc(200px + 10vw)" ref="carousel"
        class="text-white shadow-0 rounded-borders bg-glass-black q-pt-md">
        <q-carousel-slide v-for="(img, index) in work.imgPaths" :key="img" :name="index + 1" class="flex justify-center"
          style="width: 100%;"><q-img v-bind:src="`works_imgs/${workFolder}${img}.webp`" spinner-color="secondary"
            fit="contain" style="max-height: 100%; max-width: 400px"
            class="non-selectable rounded-borders" /></q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-lg my-card-text text-weight-regular">
      <div class="flex q-gutter-x-sm q-gutter-y-sm q-mb-lg" id="tags_holder">
        <q-btn v-for="tag in work.tags" :key="tag" no-caps color="accent" class="q-pa-xs row rounded-borders"
          @click="typeOfFillter = tag">
          <div class="" style="min-width: 64px">
            {{ $t(tag?.[0]) }}
          </div>
          <q-icon :name="tag?.[1]" size="sm" class="q-pl-md" />
          <q-tooltip class="bg-secondary text-body2" :offset="[10, 10]">
            {{ $t("tooltip_clickTofilterByTag") }}
          </q-tooltip>
        </q-btn>
      </div>
      <div class="q-mt-lg">
        <div class="h4">
          {{ work.title?.[i18nLocale.locale.value] }}
        </div>
        <div class="h6">
          {{ $t("portcard_work_madeFor") }}: {{ work.madeFor?.[i18nLocale.locale.value] }}
        </div>
        <div class="q-pt-md">
          {{ work.descriptionShort?.[i18nLocale.locale.value] }}
        </div>
      </div>
    </div>
    <div>
      <q-card-actions align="right" class="q-pa-md">
        <q-btn class="text-capitalize" @click="showCardDialog = true" color="accent">{{ $t("button_ShowMore") }}
          <q-tooltip class="bg-secondary text-body2" :offset="[10, 10]">
            {{ $t("tooltip_showTheWorkDescrLong") }}
          </q-tooltip></q-btn>
      </q-card-actions>
    </div>
  </q-card>
  <PortCards_Card_Dialog v-model="showCardDialog" :work="work"></PortCards_Card_Dialog>
</template>

<script setup>
import PortCards_Card_Dialog from "./PortCards_Card_Dialog.vue";
import { ref, computed } from "vue";
const showCardDialog = ref(false);
defineOptions({
  name: "PortCards_Card",
});

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();

// Get info about 1 work
const props = defineProps({
  work: {
    type: Object,
  },
});
const workFolder = computed(() => {
  if (!props.work || !props.work.ihn) return '';
  return `${props.work.ihn}/`;
});

const slide = ref(1);
</script>

<style>
.my-card-test {
  display: flex;
}

.my-card-text {
  flex-grow: 1;
}
</style>