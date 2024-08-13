<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
  created() {
    this.$q.dark.set(true);
  },
});
</script>

<!-- Todo add works with DB as json an a system of tags -->

<style>
.fontStyle-Wadik {
  font-family: Wadik;
}
.fontwhite {
  color: white;
}
.container {
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
}
.popup {
  position: absolute;
  left: 0;
  top: 80px;
  padding: 12px;
  height: 698px;
  width: 100%;
  border-radius: 20px;
  z-index: 1000;
}
.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}
.popup-z {
  z-index: 1001;
}
</style>