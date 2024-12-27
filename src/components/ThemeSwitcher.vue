<template>
  <q-toggle size="lg" keep-color v-model="themeDarkSwitch" @change="toggleDarkMode" checked-icon="dark_mode"
    color="darkLighter" unchecked-icon="wb_sunny" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useQuasar } from "quasar";

defineOptions({
  name: "ThemeSwitcher",
});

const $q = useQuasar();

// Initialize themeDarkSwitch with a default value of true (dark mode)
const themeDarkSwitch = computed({
  get: () => $q.dark.isActive,
  set: (value) => {
    $q.dark.set(value);
    localStorage.setItem('themeDark', JSON.stringify(value)); // Save to localStorage
  },
});

onMounted(() => {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem('themeDark');
  if (savedTheme !== null) {
    themeDarkSwitch.value = JSON.parse(savedTheme);
  } else {
    // If no preference is found, set dark mode as default
    themeDarkSwitch.value = true; // Default to dark mode
    $q.dark.set(true); // Set Quasar dark mode
  }
});
</script>
