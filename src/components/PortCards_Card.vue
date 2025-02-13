<template>
  <q-card class="q-pb-md q-ma-md shadow-alwaysBlack-2" style="min-width: 200px; max-width: 500px">
    <!-- Card sections divs -->
    <div>
      <q-carousel v-model="slide" infinite transition-prev="jump-right" transition-next="jump-left" swipeable animated
        control-color="dark" prev-icon="arrow_left" next-icon="arrow_right" navigation-icon="radio_button_unchecked"
        navigation-active-icon="radio_button_checked" control-type="regular" :navigation="thumbnailHasMoreThat1Pic"
        :arrows="thumbnailHasMoreThat1Pic" height="calc(200px + 10vw)" ref="carousel"
        class="text-white shadow-0 bg-glass-black q-pt-md">
        <q-carousel-slide v-for="(img, index) in work.thumbImgPaths" :key="img" :name="index + 1"
          class="flex justify-center" style="width: 100%;"><q-img v-bind:src="`works_imgs/${workFolder}${img}.webp`"
            spinner-color="secondary" fit="contain" style="max-height: 100%; max-width: 400px"
            class="non-selectable rounded-borders" /></q-carousel-slide>
      </q-carousel>
    </div>
    <q-card-section class="q-pa-lg my-card-text text-weight-regular">
      <div class="flex q-gutter-x-sm q-gutter-y-sm q-mb-lg" id="tags_holder">
        <q-btn v-for="(tag, index) in work.tags" :key="index" no-caps push
          :color="selectedTag === tag ? 'secondary shadow-2' : 'accent'" class="q-pa-xs row rounded-borders"
          @click="emit('emit-filter-by-tag', tag)" :disable="wrapperIsNotStatic">
          <div class="" style="min-width: 64px">
            {{ $t(tag) }}
          </div>
          <q-icon :name="whatIconTagHas(tag)" size="sm" class="q-pl-md" />
          <q-tooltip v-if="!wrapperIsNotStatic" class="bg-secondary text-body2 shadow-alwaysBlack-20"
            :offset="[10, 10]">
            {{ $t("tooltip_clickTofilterByTag") }}
          </q-tooltip>
        </q-btn>
        <q-tooltip v-if="wrapperIsNotStatic" class="bg-info text-black text-body2 shadow-alwaysBlack-20 q-pa-sm"
          :offset="[10, 10]" :hide-delay="1000">{{ $t("tooltip_clickTofilterByTag_disabled") }}
        </q-tooltip>
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
    </q-card-section>

    <q-card-actions align="right" class="q-pa-md">
      <q-btn class="text-capitalize" @click="showCardDialog = true" color="accent" push
        :disable="longDescrAvailable != true">{{ $t("button_ShowMore") }}
        <q-tooltip v-if="longDescrAvailable == true" class="bg-secondary text-body2 shadow-5" :offset="[10, 10]">
          {{ $t("tooltip_showTheWorkDescrLong") }}
        </q-tooltip>
        <q-tooltip v-if="!longDescrAvailable" class="bg-negative text-body2 shadow-alwaysBlack-20" :offset="[10, 10]">
          {{ $t("tooltip_showTheWorkDescrLong_notAvailable") }}
        </q-tooltip>
      </q-btn>
    </q-card-actions>

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

const props = defineProps({
  work: {
    type: Object,
  },
  selectedTag: {
    type: String,
    default: null,
    required: false,
  },
  wrapperIsNotStatic: {
    default: undefined,
    required: false
  }
});
const emit = defineEmits(['emit-filter-by-tag']);

const longDescrAvailable = computed(() => {
  if (!props.work?.hasLongDescr) return false;
  const descriptionLong = props.work.descriptionLong;
  const currentLocale = i18nLocale.locale.value;

  if (typeof descriptionLong === 'string') {
    return descriptionLong.trim() !== '';
  }

  if (Array.isArray(descriptionLong)) {
    return descriptionLong.length > 0;
  }

  if (typeof descriptionLong === 'object') {
    return Object.prototype.hasOwnProperty.call(descriptionLong, currentLocale) &&
      (typeof descriptionLong[currentLocale] === 'string' ? descriptionLong[currentLocale].trim() !== '' :
        Array.isArray(descriptionLong[currentLocale]) ? descriptionLong[currentLocale].length > 0 : false);
  }

  return false;
});

const thumbnailHasMoreThat1Pic = computed(() => {
  if (props.work.thumbImgPaths.length > 1) return true
  else return false
});

const workFolder = computed(() => {
  if (!props.work || !props.work.ihn) return '';
  return `${props.work.ihn}/`;
});

const slide = ref(1);

const whatIconTagHas = (tag) => {
  const tagIconMap = {
    "tag_website": 'language',
    "tag_frontend": 'web_asset',
    "tag_design": 'brush',
    "tag_tilda": 'code_off',
    "tag_wordpress": 'code_off',
    "tag_logo": 'diamond',
    "tag_graphics_and_vector": 'diamond',
  };
  if (!(tag in tagIconMap)) {
    console.warn(`Unknown icon: ${tag}. Falling back to diamond icon.`);
  }
  return tagIconMap[tag] || 'diamond';
};
</script>

<style>
.my-card-test {
  display: flex;
}

.my-card-text {
  flex-grow: 1;
}
</style>