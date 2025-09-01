<template>
  <q-page>
    <div class="q-py-xl whoiam-wrapper container flex">
      <q-item class="whoiam-text flex column" style="height:60vh">
        <q-item-section class="flex">
          <q-item-label class="h1_bigger2 text-bold ">{{
            $t("aboutmepage_Frontend_Developer_Designer")
          }}</q-item-label>
          <q-item-label class="h3">{{
            $t("aboutmepage_Making_Products")
          }}</q-item-label>
        </q-item-section>
        <!-- <q-item-section class="whoiam-wrapper q-py-md">
          <q-item class="q-pt-md h5" style="max-width: 300px">
            {{ $t("aboutmepage_Making_Products_SmallPhrase1") }}
          </q-item>
          <q-item class="q-pt-md h5" style="max-width: 300px">
            {{ $t("aboutmepage_Making_Products_SmallPhrase2") }}
          </q-item>
        </q-item-section> -->
      </q-item>
      <!-- <q-card class="whoiam-img flex justify-center flex-center border-radius-20 q-ma-md">
        <q-img class="non-selectable rounded-borders" alt="Meme" spinner-color="secondary" src="\general\me_me.webp"
          style="min-width: 200px; min-height: 200px; width: 80%; height: 80%" />
      </q-card> -->
      <div class="flex flex-center">
        <MeBrief />
      </div>
    </div>
    <div class="q-pt-xl">
      <div class="h1 text-center">
        {{ $t("myWorks") }}
      </div>
      <div class="myworksexample border-radius-20">
        <PortCards_Wrapper :howMuchWorksToShow="3" :whatWorksToShow="`works`" />
      </div>
    </div>
    <!-- <div class="q-py-xl" :class="$q.dark.isActive ? '' : ''">
      <div class="myskills aboutme-2textblocks-wrapper container q-py-xl flex justify-center">
        <q-item class="aboutme-2textblocks-design">
          <q-item-section class="q-pa-md">
            <q-item-label class="h1 text-bold">{{
              $t("aboutmepage_2GridBlocks_Design_Title")
            }}</q-item-label>
            <q-item class="h5">
              {{ $t("aboutmepage_2GridBlocks_Design_Descr") }}</q-item>
          </q-item-section>
        </q-item>
        <q-item class="aboutme-2textblocks-frontend">
          <q-item-section class="q-pa-md">
            <q-item-label class="h1 text-bold">{{
              $t("aboutmepage_2GridBlocks_Frontend_Title")
            }}</q-item-label>
            <q-item class="h5">
              {{ $t("aboutmepage_2GridBlocks_Frontend_Descr") }}</q-item>
          </q-item-section>
        </q-item>
      </div>
    </div> -->
    <div class="container q-pb-xl">
      <div class="h1_bigger2 text-center">
        {{ $t("webdes_workplan_title_workplan") }}
      </div>
      <q-item class="q-pb-xl container">
        <q-timeline color="secondary" layout="dense">

          <q-timeline-entry color="secondary" icon="keyboard_arrow_down" />

          <q-timeline-entry :title="$t('webdes_workplan_1_descr')" :subtitle="$t('webdes_workplan_1_name')"
            color="secondary" icon="question_mark" />

          <q-timeline-entry :title="$t('webdes_workplan_2_descr')" :subtitle="$t('webdes_workplan_2_name')"
            color="accent" icon="calendar_today" />

          <q-timeline-entry :title="$t('webdes_workplan_3_descr')" :subtitle="$t('webdes_workplan_3_name')"
            color="accent" icon="find_replace" />

          <q-timeline-entry :title="$t('webdes_workplan_4_descr')" :subtitle="$t('webdes_workplan_4_name')"
            color="orange" icon="done_all" />
        </q-timeline>
      </q-item>
    </div>
    <div class="container q-pb-xl">
      <div class="h1_bigger2 text-center q-pb-md">
        {{ $t("contactMe") }}
      </div>
      <div class="flex flex-center">
        <MeBrief />
      </div>
      <div class="flex items-center justify-center">
        <q-btn class="q-mt-md" color="accent" icon-right="search" :label="$t('show_more_of_my_works')"
          :to="{ path: './works' }" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";
import MeBrief from "src/components/MeBrief.vue"
defineOptions({
  name: "WebdesRootPage",
});
</script>

<style lang="scss">
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