<template>
  <q-page>
    <div class="q-py-xl container flex flex-center">
      <q-item>
        <q-item-section>
          <!-- <q-item-label>
            {{ $t("devPages_devRootPage_me_name") }}
            {{ $t("devPages_devRootPage_me_aboutMe") }}
          </q-item-label> -->
          <q-card flat bordered style="max-width: 650px" class="q-pa-md">
            <q-card-section class="row flex items-center"
              :class="$q.screen.lt.sm ? 'justify-around' : 'justify-between'">
              <div class="q-pr-md text-h4 text-center q-pt-sm">{{ $t("devPages_devRootPage_me_name") }}</div>
              <div class="q-pl-md flex">
                <q-btn disable round color="dark" icon="fa-brands fa-telegram" size="lg" />
                <q-btn disable round color="dark" icon="fa-brands fa-github" size="lg" />
              </div>
            </q-card-section>
            <q-separator color="accent" size='2px' />
            <q-card-section>
              <div class="h6 text-subtitle2 q-pa-sm">{{ $t("devPages_devRootPage_me_aboutMe") }}</div>
            </q-card-section>
          </q-card>
        </q-item-section>

      </q-item>
    </div>
    <div class="q-py-xl container flex flex-center">
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
            :subtitle="$t('devPages_devRootPage_exp_2_when')" :body="$t('devPages_devRootPage_exp_2_descr')" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_1_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_1_when')" :body="$t('devPages_devRootPage_exp_1_descr')" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_0_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_0_when')" />
        </q-timeline>
      </q-item>
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