<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="h2" style="opacity: 0.4">
        {{ $t("page404_caption") }}
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" unelevated @click="goBack" :label="$t('page404_button')"
        no-caps />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});

import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.go(-1); // Navigates back to the previous page
}
</script>
