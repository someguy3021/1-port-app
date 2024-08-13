<template>
  <q-page class="">
    <div :class="$q.dark.isActive ? 'bg-gr1-darktheme' : 'bg-gr1-lighttheme'">
      <div class="container">
        321312321132131dsadasdasdsadasdasdsa d3d123d12d21d1
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>
    <div>
      <div class="container">
        321312321132131dsadasdasdsadasdasdsa d3d123d12d21d1
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>
    <div :class="$q.dark.isActive ? 'bg-gr2-darktheme' : 'bg-gr2-lighttheme'">
      <div class="container">
        321312321132131dsadasdasdsadasdasdsa d3d123d12d21d1
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
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
  background: linear-gradient(to left, $primary, $accent);
}

.bg-gr2-lighttheme {
  background: linear-gradient(to left, $primary, white, white, $primary);
}
.bg-gr2-darktheme {
  background: linear-gradient(to left, $dark-page, $primary);
}
</style>