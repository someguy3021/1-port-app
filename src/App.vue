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
.th-scalabletext-var1-h1 {
  font-size: 80px;
}
.th-scalabletext-var1-h2 {
  font-size: 60px;
}
.th-scalabletext-var1-h3 {
  font-size: 40px;
}
.th-scalabletext-var1-h4 {
  font-size: 28px;
}
.th-scalabletext-var1-h5 {
  font-size: 16px;
}
.th-scalabletext-var1-h6 {
  font-size: 14px;
}
.th-scalabletext-var1-h7 {
  font-size: 12px;
}

@media (max-width: 1539.99px) {
  .th-scalabletext-var1-h1 {
    font-size: 64px;
  }
  .th-scalabletext-var1-h2 {
    font-size: 60px;
  }
  .th-scalabletext-var1-h3 {
    font-size: 40px;
  }
  .th-scalabletext-var1-h4 {
    font-size: 28px;
  }
  .th-scalabletext-var1-h5 {
    font-size: 16px;
  }
  .th-scalabletext-var1-h6 {
    font-size: 14px;
  }
}

@media (max-width: 1439.99px) {
  .th-scalabletext-var1-h1 {
    font-size: 64px;
  }
  .th-scalabletext-var1-h2 {
    font-size: 48px;
  }
  .th-scalabletext-var1-h3 {
    font-size: 32px;
  }
  .th-scalabletext-var1-h4 {
    font-size: 28px;
  }
  .th-scalabletext-var1-h5 {
    font-size: 16px;
  }
  .th-scalabletext-var1-h6 {
    font-size: 14px;
  }
}
@media (max-width: 1023.99px) {
  .th-scalabletext-var1-h1 {
    font-size: 32px;
  }
  .th-scalabletext-var1-h2 {
    font-size: 28px;
  }
  .th-scalabletext-var1-h3 {
    font-size: 24px;
  }
  .th-scalabletext-var1-h4 {
    font-size: 24px;
  }
  .th-scalabletext-var1-h5 {
    font-size: 16px;
  }
  .th-scalabletext-var1-h6 {
    font-size: 14px;
  }

  .container {
    max-width: 100%;
  }
  .thscale-q-pa-xl {
    padding: 36px 12px;
  }
}
@media (max-width: 599.99px) {
  .th-scalabletext-var1-h1 {
    font-size: 28px;
  }
  .th-scalabletext-var1-h2 {
    font-size: 24px;
  }
  .th-scalabletext-var1-h3 {
    font-size: 20px;
  }
  .th-scalabletext-var1-h4 {
    font-size: 20px;
  }
  .th-scalabletext-var1-h5 {
    font-size: 14px;
  }
  .th-scalabletext-var1-h6 {
    font-size: 14px;
  }

  .container {
    max-width: 100%;
  }
  .thscale-q-pa-xl {
    padding: 36px 4px;
  }
}
// Custom adaptive font sizes class library. Larger fonts become smaller faster that small fonts. h1-for biggest headings, h2-for big headings, h3-for small headings, h4-for bigger text.

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