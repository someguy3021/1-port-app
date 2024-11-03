<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        {{ $t("page404_caption") }}
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" unelevated to="/" :label="$t('page404_button')" no-caps />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>
