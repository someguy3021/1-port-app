<template>
  <q-page>
    <div class="q-pt-xl container flex flex-center">
      <MeBrief />
    </div>
    <div class="q-pb-xl container flex flex-center">
      <MeBriefStack />
    </div>
    <div class="container flex flex-center">
      <!-- <q-stepper v-model="step" vertical color="primary" animated style="width: 90%;">
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
      </q-stepper> -->
      <q-item>
        <q-timeline color="secondary">
          <q-timeline-entry heading :body="$t('devPages_devRootPage_exp_general1')" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_3_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_3_when')" :body="$t('devPages_devRootPage_exp_3_descr')"
            color="orange" icon="done_all" />

          <q-timeline-entry heading :body="$t('devPages_devRootPage_exp_general2')" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_2_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_2_when')" :body="$t('devPages_devRootPage_exp_2_descr')"
            color="secondary" icon="keyboard_arrow_up" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_1_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_1_when')" :body="$t('devPages_devRootPage_exp_1_descr')" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_0_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_0_when')" color="secondary" icon="keyboard_arrow_up" />
        </q-timeline>
      </q-item>
    </div>

    <div>
      <div class="h1 text-center">
        {{ $t("myWorks") }}
      </div>
      <div class="myworksexample thscale-q-py-xl border-radius-20">
        <PortCards_Wrapper :howMuchWorksToShow="3" :whatWorksToShow="`works`" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PortCards_Wrapper from "src/components/PortCards_Wrapper.vue";
import MeBrief from "src/components/MeBrief.vue"
import MeBriefStack from "src/components/MeBrief_Stack.vue"

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