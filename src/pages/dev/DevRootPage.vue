<template>
  <q-page>
    <div class="q-py-xl container flex flex-center">
      <q-stepper v-model="step" vertical color="primary" animated style="width: 90%;">
        <q-step :name="1" :title="$t('devPages_devRootPage_exp_1_role')"
          :caption="$t('devPages_devRootPage_exp_1_where')" color="secondary" icon="language" active-icon="language"
          :done="step > 1">
          {{ $t("devPages_devRootPage_exp_1_descr") }}
        </q-step>

        <q-step :name="1" :title="$t('devPages_devRootPage_exp_2_role')"
          :caption="$t('devPages_devRootPage_exp_2_where')" color="secondary" icon="manage_accounts"
          active-icon="manage_accounts" :done="step > 2">
          {{ $t("devPages_devRootPage_exp_2_descr") }}

        </q-step>

        <q-step :name="1" :title="$t('devPages_devRootPage_exp_3_role')"
          :caption="$t('devPages_devRootPage_exp_3_where')" color="secondary" icon="manage_accounts"
          active-icon="manage_accounts">
          {{ $t("devPages_devRootPage_exp_3_descr") }}
        </q-step>
      </q-stepper>
      <q-timeline color="secondary">
        <q-timeline-entry heading body="Опыт работы" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg" :body="body" />

        <q-timeline-entry :title="$t('devPages_devRootPage_exp_2_role')" subtitle="February 21, 1986" icon="delete"
          :body="body" />

        <q-timeline-entry heading body="Обучение и самообучение, 2019 - настоящий момент" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" color="orange" icon="done_all"
          :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986"
          body="bodybodybodybodybodybodybodybodybodybodybodybodybodybody" />
      </q-timeline>
    </div>

    <div>
      <div class="myworksexample thscale-q-pa-xl border-radius20">
        <PortCards_Wrapper :howMuchWorksToShow="3" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";

defineOptions({
  name: "DevRootPage",
});
import { ref } from 'vue'

const step = ref(1)
</script>

<style lang="scss">
/* Stepper lines colors */
// .q-stepper--vertical .q-stepper__dot:before {
//   // background: rgba(150, 150, 150, 0.267) !important;
// }

// .q-stepper--vertical .q-stepper__dot:after {
//   // background: rgba(150, 150, 150, 0.267) !important;
// }
/* Stepper lines colors */
</style>