<template>
  <q-item :class="$q.dark.isActive ? '' : 'bg-white'">
    <q-item-section avatar :class="$q.screen.lt.md ? '' : 'q-py-xs'">
      <q-icon name="language" :class="$q.dark.isActive ? '' : 'text-black'" />
    </q-item-section>

    <q-item-section>
      <!-- <q-select v-model="locale" :options="localeOptions" :label="$t('changelang')" dense borderless emit-value
        map-options options-dense style="min-width: 120px" /> -->
      <q-select v-model="currentLocale" :options="localeOptions" :label="$t('changelang')" dense borderless emit-value
        map-options options-dense style="min-width: 120px" />
    </q-item-section>
  </q-item>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, onMounted, watch } from "vue";

export default {
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    // Define available locale options
    const localeOptions = [
      { value: "ru-1", label: "Russian" },
      { value: "en-US", label: "English" },
    ];

    // Reactive variable for the current locale
    const currentLocale = ref(locale.value);

    // Function to detect the user's browser language
    const detectBrowserLanguage = () => {
      const userLang = navigator.language || navigator.userLanguage; // Get the browser language
      return localeOptions.find((option) => option.value === userLang)
        ? userLang
        : localeOptions[0].value; // Default to the first option if not found
    };

    // Set initial locale based on localStorage or detected browser language
    onMounted(() => {
      const savedLocale = localStorage.getItem("userLocale");
      if (savedLocale) {
        currentLocale.value = savedLocale; // Use saved locale
      } else {
        const detectedLocale = detectBrowserLanguage(); // Detect browser language
        currentLocale.value = detectedLocale; // Set the detected language
      }
      locale.value = currentLocale.value; // Sync with global locale
    });

    // Watch for changes in `currentLocale` and update global locale and localStorage
    watch(currentLocale, (newLocale) => {
      locale.value = newLocale; // Update global locale
      localStorage.setItem("userLocale", newLocale); // Save to localStorage
    });

    return {
      currentLocale,
      localeOptions,
    };
  },
};
// import { useI18n } from "vue-i18n";

// export default {
//   setup() {
//     const { locale } = useI18n({ useScope: "global" });

//     return {
//       locale,
//       localeOptions: [
//         { value: "ru-1", label: "Russian" },
//         { value: "en-US", label: "English" },
//       ],
//     };
//   },
// };

// // import { useI18n } from "vue-i18n";
// // import { ref, onMounted } from "vue";

// // export default {
// //   setup() {
// //     const { locale } = useI18n({ useScope: "global" });
// //     const localeOptions = [
// //       { value: "ru-1", label: "Russian" },
// //       { value: "en-US", label: "English" },
// //     ];

// //     // Function to detect the user's browser language
// //     const detectBrowserLanguage = () => {
// //       const userLang = navigator.language || navigator.userLanguage; // Get the browser language
// //       return localeOptions.find(option => option.value === userLang) ? userLang : localeOptions[0].value; // Default to the first option if not found
// //     };

// //     onMounted(() => {
// //       // Check localStorage for saved language preference
// //       const savedLocale = localStorage.getItem('userLocale');
// //       if (savedLocale) {
// //         locale.value = savedLocale; // Use saved locale
// //       } else {
// //         const detectedLocale = detectBrowserLanguage(); // Detect browser language
// //         locale.value = detectedLocale; // Set the detected language
// //       }
// //     });

// //     // Watch for changes in locale and save to localStorage
// //     const updateLocale = (newLocale) => {
// //       locale.value = newLocale;
// //       localStorage.setItem('userLocale', newLocale); // Save the new locale to localStorage
// //     };

// //     return {
// //       locale,
// //       localeOptions,
// //       updateLocale,
// //     };
// //   },
// // };
</script>