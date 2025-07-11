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
          <q-timeline-entry heading :body="experienceString" />
          <q-timeline-entry :title="$t('devPages_devRootPage_exp_3_roleAndWhere')"
            :subtitle="formattedStartDate + $t('devPages_devRootPage_exp_3_when')"
            :body="$t('devPages_devRootPage_exp_3_descr')" color="orange" icon="done_all" />

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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// Форматируем дату начала (месяц и год) с поддержкой i18n
const formattedStartDate = computed(() => {
  const monthIndex = startDate.getMonth()
  const year = startDate.getFullYear()

  // Получаем локализованные названия месяцев
  const months = [
    t('months.january'),
    t('months.february'),
    t('months.march'),
    t('months.april'),
    t('months.may'),
    t('months.june'),
    t('months.july'),
    t('months.august'),
    t('months.september'),
    t('months.october'),
    t('months.november'),
    t('months.december')
  ]

  return `${months[monthIndex]} ${year}`
})

const startDate = new Date('2024-02-01') // Укажите вашу дату начала
const totalExperience = computed(() => {
  const now = new Date()
  const diffInMs = now - startDate
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25)
  const exp = Math.round(years * 10) / 10
  return exp < 1.5 ? 1.5 : exp
})

// Функция для правильного склонения
const getExperienceString = (years) => {
  const floorYears = Math.floor(years)
  const remainder = years - floorYears
  const yearsStr = years.toFixed(1)

  // Определение формы слова
  let form
  if (floorYears === 1 && remainder === 0) {
    form = 'one' // "год"
  } else if (
    (floorYears === 1 && remainder > 0) ||
    (floorYears >= 2 && floorYears <= 4) ||
    (floorYears === 0 && years >= 1.5)
  ) {
    form = 'few' // "года"
  } else {
    form = 'many' // "лет"
  }

  return t(`devPages_devRootPage.totalExperience.${form}`, [yearsStr])
}

const experienceString = computed(() => getExperienceString(totalExperience.value))
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