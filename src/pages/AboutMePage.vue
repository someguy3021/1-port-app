<template>
  <q-page class="">
    <div class="q-py-xl">
      <div class="whoiam-wrapper container q-py-xl flex">
        <q-item class="whoiam-text flex column q-ma-md">
          <q-item-section class="flex">
            <q-item-label class="th-scalabletext-var1-h1 text-bold">{{
              $t("aboutmepage_Frontend_Developer_Designer")
            }}</q-item-label>
            <q-item-label class="th-scalabletext-var1-h3">{{
              $t("aboutmepage_Making_Products")
            }}</q-item-label>
          </q-item-section>
          <q-item-section class="whoiam-wrapper q-py-md">
            <q-item class="q-pt-md" style="max-width: 300px">
              {{ $t("aboutmepage_Making_Products_SmallPhrase1") }}
            </q-item>
            <q-item class="q-pt-md" style="max-width: 300px">
              {{ $t("aboutmepage_Making_Products_SmallPhrase2") }}
            </q-item>
          </q-item-section>
        </q-item>
        <q-card
          class="whoiam-img flex justify-center flex-center border-radius20 q-ma-md"
        >
          <img
            class="non-selectable"
            alt="Quasar logo"
            src="~assets/quasar-logo-vertical.svg"
            style="min-width: 200px; min-height: 200px; width: 80%; height: 80%"
          />
        </q-card>
      </div>
    </div>
    <div class="" :class="$q.dark.isActive ? '' : ''">
      <div
        class="myworksexample container thscale-q-pa-xl bg-glass-black border-radius20"
      >
        <PortCards_Wrapper :howMuchWorksToShow="howMuchWorksToShow" />
      </div>
    </div>
    <div class="q-py-xl" :class="$q.dark.isActive ? '' : ''">
      <div
        class="myskills aboutme-2textblocks-wrapper container q-py-xl flex justify-center"
      >
        <q-item class="aboutme-2textblocks-design">
          <q-item-section class="q-pa-md">
            <q-item-label class="th-scalabletext-var1-h2 text-bold">{{
              $t("aboutmepage_2GridBlocks_Design_Title")
            }}</q-item-label>
            <q-item class="th-scalabletext-var1-h5 th-font-lineheight-16">
              {{ $t("aboutmepage_2GridBlocks_Design_Descr") }}</q-item
            >
          </q-item-section>
        </q-item>
        <q-item class="aboutme-2textblocks-frontend">
          <q-item-section class="q-pa-md">
            <q-item-label class="th-scalabletext-var1-h2 text-bold">{{
              $t("aboutmepage_2GridBlocks_Frontend_Title")
            }}</q-item-label>
            <q-item class="th-scalabletext-var1-h5 th-font-lineheight-16">
              {{ $t("aboutmepage_2GridBlocks_Frontend_Descr") }}</q-item
            >
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";
defineOptions({
  name: "IndexPage",
});

let howMuchWorksToShow = 3;
</script>

<style lang="scss" scoped>
.whoiam-wrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "whoiam-text"
    "whoiam-img";
}
.whoiam-text {
  grid-area: whoiam-text;
}
.whoiam-img {
  grid-area: whoiam-img;
}

.aboutme-2textblocks-wrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "aboutme-2textblocks-design"
    "aboutme-2textblocks-frontend";
}
.aboutme-2textblocks-design {
  grid-area: aboutme-2textblocks-design;
}
.aboutme-2textblocks-frontend {
  grid-area: aboutme-2textblocks-frontend;
}
@media (min-width: 700px) {
  .aboutme-2textblocks-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "aboutme-2textblocks-design  ."
      ".     aboutme-2textblocks-frontend";
  }
}
@media (min-width: 800px) {
  .whoiam-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "whoiam-text  whoiam-img";
  }
}
</style>