<template>
  <q-page class="">
    <div :class="$q.dark.isActive ? 'bg-gr1-darktheme' : 'bg-gr1-lighttheme'">
      <div class="whoiam container">
        <q-item>
          <q-item-section>
            <q-item-label>FrontEnd Developer\Designer.</q-item-label>
            <q-item-label>Making solid design products.</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              2 FrontEnd Developer with skills to make a website, also like so
              good websites like yo really good.
            </q-item-label>
            <q-item-label>
              2 Designer with +5 years of vector graphics, and experience in
              web-design.
            </q-item-label>
          </q-item-section>
        </q-item>
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>
    <div>
      <div class="myworksexample container bg-glass-black border-2px-radius50">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>
    <div :class="$q.dark.isActive ? 'bg-gr2-darktheme' : 'bg-gr2-lighttheme'">
      <div class="myskills container">
        <q-item>
          <q-item-section>
            <q-item-label>Design</q-item-label>
            <q-item-label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem atque, incidunt ipsam porro, expedita sapiente sit
              voluptatibus ducimus provident error repellendus magnam! Ipsa
              obcaecati blanditiis porro voluptates. Eius,
              assumenda.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>FrontEnd</q-item-label>
            <q-item-label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem atque, incidunt ipsam porro, expedita sapiente sit
              voluptatibus ducimus provident error repellendus magnam! Ipsa
              obcaecati blanditiis porro voluptates. Eius,
              assumenda.</q-item-label
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
.bg-gr1-lighttheme {
  background: linear-gradient(to left, $primary, white, white, $accent);
}
.bg-gr1-darktheme {
  background: linear-gradient(215deg, $dark-page, $accent);
}

.bg-glass-black {
  background: linear-gradient(to left, $glass1, $glass2);
}
.border-2px-radius50 {
  border-radius: 20px;
}

.bg-gr2-lighttheme {
  background: linear-gradient(to left, $primary, white, white, $primary);
}
.bg-gr2-darktheme {
  background: linear-gradient(90deg, $dark-page, $primary);
}
</style>