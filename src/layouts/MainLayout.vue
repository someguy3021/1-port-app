<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <language-switch></language-switch>
        <q-toggle
          size="lg"
          keep-color
          v-model="themeDarkSwitch"
          @click="$q.dark.toggle()"
          checked-icon="dark_mode"
          color="dark"
          unchecked-icon="wb_sunny"
        />
        <q-toolbar-title> {{ $t("myportfolio") }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <language-switch></language-switch>
      <q-toggle
        size="lg"
        keep-color
        v-model="themeDarkSwitch"
        @click="$q.dark.toggle()"
        checked-icon="dark_mode"
        color="dark"
        unchecked-icon="wb_sunny"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LanguageSwitch from "src/components/LanguageSwitch.vue";

defineOptions({
  name: "MainLayout",
});

const themeDarkSwitch = ref(false);

const linksList = [
  {
    title: "link_aboutme",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "link_myworks",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "link_services",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "link_contacts",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
