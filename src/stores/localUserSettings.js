import { defineStore } from "pinia";
import { watch } from "vue";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: JSON.parse(localStorage.getItem("isDark")) || false, // Восстановление состояния из Local Storage
  }),
  persist: true,
});

// Сохранение состояния в Local Storage
const themeStore = useThemeStore();
watch(
  () => themeStore.isDark,
  (newValue) => {
    localStorage.setItem("isDark", JSON.stringify(newValue));
  }
);

export const useLanguageStore = defineStore("language", {
  state: () => ({
    locale: localStorage.getItem("locale") || "en-US", // Установка начального языка из Local Storage
  }),
  persist: true,
});

// Сохранение состояния языка в Local Storage
const languageStore = useLanguageStore();
watch(
  () => languageStore.locale,
  (newValue) => {
    localStorage.setItem("locale", newValue);
  }
);
