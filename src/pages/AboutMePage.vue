<template>
  <q-page class="">
    <div class="q-py-xl">
      <div class="whoiam-wrapper container flex">
        <q-item class="whoiam-text flex column q-ma-md">
          <q-item-section class="flex flex-center">
            <q-item-label class="th-scalabletext-var1-h1 text-bold"
              >FrontEnd Developer\Designer.</q-item-label
            >
            <q-item-label class="th-scalabletext-var1-h3"
              >Making solid design products and experiences.</q-item-label
            >
          </q-item-section>
          <q-item-section class="whoiam-wrapper q-pa-md">
            <q-item class="q-mt-md" style="max-width: 300px">
              FrontEnd Developer with skills to make a website, also like so
              good websites like yo really good.
            </q-item>
            <q-item class="q-mt-md" style="max-width: 300px">
              Designer with +5 years of vector graphics, and experience in
              web-design.
            </q-item>
          </q-item-section>
        </q-item>
        <q-item
          class="whoiam-img flex-center bg-glass-black border-radius20 q-ma-md"
        >
          <img
            class="flex flex-center non-selectable"
            alt="Quasar logo"
            src="~assets/quasar-logo-vertical.svg"
            style="min-width: 200px; min-height: 200px; width: 80%; height: 80%"
          />
        </q-item>
      </div>
    </div>
    <div
      class="hidden"
      :class="$q.dark.isActive ? 'bg-gr1-darktheme' : 'bg-gr1-lighttheme'"
    >
      <div
        class="myworksexample container q-pa-xl bg-glass-black border-radius20"
      >
        <img
          class="non-selectable"
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
        <img
          class="non-selectable"
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>
    <div
      class="q-py-xl"
      :class="$q.dark.isActive ? 'bg-gr2-darktheme' : 'bg-gr2-lighttheme'"
    >
      <div
        class="myskills aboutme-2textblocks-wrapper container flex justify-center"
      >
        <q-item class="aboutme-2textblocks-design">
          <q-item-section class="q-pa-md">
            <q-item-label class="th-scalabletext-var1-h2 text-bold"
              >Design</q-item-label
            >
            <q-item class="th-scalabletext-var1-h5 th-font-lineheight-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem atque, incidunt ipsam porro, expedita sapiente sit
              voluptatibus ducimus provident error repellendus magnam! Ipsa
              obcaecati blanditiis porro voluptates. Eius, assumenda.</q-item
            >
          </q-item-section>
        </q-item>
        <q-item class="aboutme-2textblocks-frontend">
          <q-item-section class="q-pa-md">
            <q-item-label class="th-scalabletext-var1-h2 text-bold"
              >FrontEnd</q-item-label
            >
            <q-item class="th-scalabletext-var1-h5 th-font-lineheight-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem atque, incidunt ipsam porro, expedita sapiente sit
              voluptatibus ducimus provident error repellendus magnam! Ipsa
              obcaecati blanditiis porro voluptates. Eius, assumenda.</q-item
            >
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
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