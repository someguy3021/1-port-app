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

<style lang="scss">
// Basic container with %
.container {
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
}

// A set of all sides scalable paddings, l and r decreses faster than b and t. Order is BT and LR btw
.thscale-q-pa-xl {
  padding: 48px 48px;
}

// Font styles classes storage here
.fontStyle-Wadik {
  font-family: Wadik;
}

.fontwhite {
  color: white;
}

.th-fontbold900 {
  font-weight: 900;
}

.th-font-lineheight-16 {
  line-height: 1.6;
}

// Custom blocks colors with both themes
.bg-gr1-lighttheme {
  background: linear-gradient(215deg, $primary, white, white, $accent);
}

.bg-gr1-darktheme {
  background: linear-gradient(215deg, $dark-page, $accent);
}

.bg-gr2-lighttheme {
  background: linear-gradient(90deg, $primary, white, white, $primary);
}

.bg-gr2-darktheme {
  background: linear-gradient(90deg, $dark-page, $primary);
}

// Custom blocks colors with both themes

.bg-glass-black {
  background: linear-gradient(to left, $glass1, $glass2);
}

.border-radius20 {
  border-radius: 20px;
}

.border-accentColor {
  border: solid 2px;
  border-color: $primary;
}

.box-shadow-example-accentColor {
  box-shadow: 0px 0px 6px $primary;
}

// Custom adaptive font sizes class library. Larger fonts become smaller faster that small fonts. h1-for biggest headings, h2-for big headings, h3-for small headings, h4-for bigger text.


@media (max-width: 1539.99px) {}

@media (max-width: 1439.99px) {}

@media (max-width: 1023.99px) {


  .container {
    width: 100%;
  }

  .thscale-q-pa-xl {
    padding: 36px 12px;
  }
}

@media (max-width: 599.99px) {

  .thscale-q-pa-xl {
    padding: 36px 4px;
  }
}

// Custom adaptive font sizes class library. Larger fonts become smaller faster that small fonts. h1-for biggest headings, h2-for big headings, h3-for small headings, h4-for bigger text.

// Bootstrap exports - mainly for texts
// Bootstrap exports - mainly for texts
// Bootstrap exports - mainly for texts
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1,
.h1 {
  font-size: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {

  h1,
  .h1 {
    font-size: 2.5rem;
  }
}

h2,
.h2 {
  font-size: calc(1.325rem + 0.9vw);
}

@media (min-width: 1200px) {

  h2,
  .h2 {
    font-size: 2rem;
  }
}

h3,
.h3 {
  font-size: calc(1.3rem + 0.6vw);
}

@media (min-width: 1200px) {

  h3,
  .h3 {
    font-size: 1.75rem;
  }
}

h4,
.h4 {
  font-size: calc(1.275rem + 0.3vw);
}

@media (min-width: 1200px) {

  h4,
  .h4 {
    font-size: 1.5rem;
  }
}

h5,
.h5 {
  font-size: 1.25rem;
}

h6,
.h6 {
  font-size: 1rem;
}

.h1_bigger1 {
  font-size: calc(1.375rem + 2vw);
}

@media (max-width: 1200px) {
  .h1_bigger1 {
    font-size: calc(12px + 3vw);
  }
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

// Bootstrap exports - mainly for texts
// Bootstrap exports - mainly for texts
// Bootstrap exports - mainly for texts

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


/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
/** {
  scrollbar-width: thin;
  scrollbar-color: #529DF3 #2A2C2C;
}*/

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #2A2C2C;
}

*::-webkit-scrollbar-track:hover {
  background-color: #4E5253;
}

*::-webkit-scrollbar-track:active {
  background-color: #3B3E3E;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #529DF3;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #3588DC;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #3D9EFF;
}

/* Buttons */
::-webkit-scrollbar-button:single-button {
  background-color: #2A2C2C;
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}

/* Up */
::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #555555 transparent;
}

::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  border-color: transparent transparent #777777 transparent;
}

/* Down */
::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 8px 8px 0 8px;
  border-color: #555555 transparent transparent transparent;
}

::-webkit-scrollbar-button:vertical:single-button:increment:hover {
  border-color: #777777 transparent transparent transparent;
}
</style>