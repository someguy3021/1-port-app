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
        <language-switch />
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

        <EssentialLink
          v-for="link in linksListShort"
          :key="link.title"
          v-bind="link"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
          <language-switch />
          <q-item>
            <q-item-section avatar>
              <q-icon name="contrast" />
            </q-item-section>
            <q-item-section avatar>
              <q-item-label>{{ $t("changetheme") }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-toggle
                size="lg"
                keep-color
                v-model="themeDarkSwitch"
                @click="$q.dark.toggle()"
                checked-icon="dark_mode"
                color="dark"
                unchecked-icon="wb_sunny"
              />
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
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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
    title: "link_aboutme_title",
    caption: "link_aboutme_caption",
    icon: "school",
    link: "#",
  },
  {
    title: "link_myworks_title",
    caption: "link_myworks_caption",
    icon: "code",
    link: "#",
  },
  {
    title: "link_services_title",
    caption: "link_services_caption",
    icon: "home_repair_service",
    link: "#",
  },
  {
    title: "link_contacts_title",
    caption: "link_contacts_caption",
    icon: "record_voice_over",
    link: "#",
  },
];
const linksListShort = [
  {
    title: "link_aboutme_title",
    icon: "school",
    link: "#",
  },
  {
    title: "link_myworks_title",
    icon: "code",
    link: "#",
  },
  {
    title: "link_services_title",
    icon: "home_repair_service",
    link: "#",
  },
  {
    title: "link_contacts_title",
    icon: "record_voice_over",
    link: "#",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
