<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :class="$q.dark.isActive ? 'bg-dark' : 'bg-darkLighter'">
      <q-toolbar class="container">
        <q-btn class="q-mx-xs" v-if="$q.screen.lt.md" flat dense round icon="menu" aria-label="Menu"
          @click="toggleLeftDrawer" />
        <language-switch />
        <ThemeSwitcher />
        <q-toolbar-title class="gt-md non-selectable th-fontbold900 rounded-borders">
          <q-item class="text-weight-regular text-white rounded-borders">{{ $t("myportfolio") }}</q-item>
        </q-toolbar-title>
        <div class="row gt-sm">
          <EssentialLink v-for="link in linksListShort" :key="link.title" v-bind="link" />
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay bordered>
      <q-list>
        <q-item-label header>
          <q-item header class="sidemenu-header">
            <q-item-section avatar>
              <q-icon name="settings" size="sm" />
            </q-item-section>

            <q-item-section class="text-center fontStyle-Wadik">
              <q-item-label>{{ $t("settings") }}</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-icon name="settings" size="sm" />
            </q-item-section>
          </q-item>
        </q-item-label>
        <q-item-section>
          <LanguageSwitch />
          <q-item>
            <q-item-section avatar>
              <q-icon name="contrast" />
            </q-item-section>
            <q-item-section avatar>
              <q-item-label>{{ $t("changetheme") }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <ThemeSwitcher />
            </q-item-section>
          </q-item>
        </q-item-section>

        <q-item-label header>
          <q-item header class="sidemenu-header">
            <q-item-section avatar>
              <q-icon name="attach_file" size="sm" />
            </q-item-section>

            <q-item-section class="text-center fontStyle-Wadik">
              <q-item-label>{{ $t("link_links") }}</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-icon name="attach_file" size="sm" />
            </q-item-section>
          </q-item>
        </q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="$q.screen.lt.md" elevated :class="$q.dark.isActive ? 'bg-dark' : 'bg-darkLighter'">
      <q-toolbar class="container flex flex-center">
        <EssentialLink class="lt-md" v-for="link in linksListShort" :key="link.title" v-bind="link" />
      </q-toolbar>
    </q-footer>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LanguageSwitch from "src/components/LanguageSwitch.vue";
import ThemeSwitcher from "src/components/ThemeSwitcher.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "link_aboutme_title",
    caption: "link_aboutme_caption",
    icon: "school",
    link: "/",
  },
  {
    title: "link_myworks_title",
    caption: "link_myworks_caption",
    icon: "code",
    link: "/works",
  },
  {
    title: "link_services_title",
    caption: "link_services_caption",
    icon: "home_repair_service",
    link: "/works",
  },
  {
    title: "link_contacts_title",
    caption: "link_contacts_caption",
    icon: "record_voice_over",
    link: "/works",
  },
];
const linksListShort = [
  {
    title: "link_aboutme_title",
    icon: "school",
    link: "/",
    isHeader: true,
  },
  {
    title: "link_myworks_title",
    icon: "code",
    link: "/works",
    isHeader: true,
  },
  {
    title: "link_services_title",
    icon: "home_repair_service",
    link: "/works",
    isHeader: true,
  },
  {
    title: "link_contacts_title",
    icon: "record_voice_over",
    link: "/works",
    isHeader: true,
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
