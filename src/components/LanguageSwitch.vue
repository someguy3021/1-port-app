<template>
  <!-- ...... -->
  <q-item class="q-pa-md" :class="$q.dark.isActive ? '' : 'bg-white'">
    <q-item-section avatar>
      <q-icon name="language" :class="$q.dark.isActive ? '' : 'text-black'" />
    </q-item-section>

    <q-item-section>
      <q-select v-model="locale" :options="localeOptions" :label="$t('changelang')" dense borderless emit-value
        map-options options-dense style="min-width: 120px" />
    </q-item-section>
  </q-item>
  <!-- ...... -->
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    return {
      locale,
      localeOptions: [
        { value: "ru-1", label: "Russian" },
        { value: "en-US", label: "English" },
      ],
    };
  },
};

// import { useI18n } from "vue-i18n";
// import { ref, onMounted } from "vue";

// export default {
//   setup() {
//     const { locale } = useI18n({ useScope: "global" });
//     const localeOptions = [
//       { value: "ru-1", label: "Russian" },
//       { value: "en-US", label: "English" },
//     ];

//     // Function to detect the user's browser language
//     const detectBrowserLanguage = () => {
//       const userLang = navigator.language || navigator.userLanguage; // Get the browser language
//       return localeOptions.find(option => option.value === userLang) ? userLang : localeOptions[0].value; // Default to the first option if not found
//     };

//     onMounted(() => {
//       // Check localStorage for saved language preference
//       const savedLocale = localStorage.getItem('userLocale');
//       if (savedLocale) {
//         locale.value = savedLocale; // Use saved locale
//       } else {
//         const detectedLocale = detectBrowserLanguage(); // Detect browser language
//         locale.value = detectedLocale; // Set the detected language
//       }
//     });

//     // Watch for changes in locale and save to localStorage
//     const updateLocale = (newLocale) => {
//       locale.value = newLocale;
//       localStorage.setItem('userLocale', newLocale); // Save the new locale to localStorage
//     };

//     return {
//       locale,
//       localeOptions,
//       updateLocale,
//     };
//   },
// };
</script>