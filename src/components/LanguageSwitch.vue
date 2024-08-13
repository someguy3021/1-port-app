<template>
  <!-- ...... -->
  <q-item>
    <q-item-section avatar>
      <q-icon name="language" />
    </q-item-section>

    <q-item-section>
      <q-select
        v-model="locale"
        :options="localeOptions"
        :label="$t('changelang')"
        dense
        borderless
        emit-value
        map-options
        options-dense
        style="min-width: 150px"
      />
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
</script>