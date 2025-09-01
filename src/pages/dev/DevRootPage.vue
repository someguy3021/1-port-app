<template>
  <q-page>
    <div class="stars-background">
      <div v-for="(star, index) in stars" :key="index" class="star" :style="star.style"></div>
    </div>
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
      <q-item :class="$q.dark.isActive ? 'border-solid-thickness1 border-color-darkborder1 bg-dark' : ''"
        class="border-radius-20">
        <q-timeline color="secondary" :class="$q.screen.lt.lg ? 'q-ma-md' : 'q-ma-lg'">
          <q-timeline-entry heading :body="experienceString" />
          <q-timeline-entry :title="$t('devPages_devRootPage_exp_3_roleAndWhere')"
            :subtitle="formattedStartDate + $t('devPages_devRootPage_exp_3_when')"
            :body="$t('devPages_devRootPage_exp_3_descr')" color="orange" icon="done_all" />

          <q-timeline-entry heading :body="$t('devPages_devRootPage_exp_general2')" />

          <!-- <q-timeline-entry :title="$t('devPages_devRootPage_exp_2_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_2_when')" :body="$t('devPages_devRootPage_exp_2_descr')"
            color="secondary" icon="keyboard_arrow_up" />

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_1_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_1_when')" :body="$t('devPages_devRootPage_exp_1_descr')" /> -->

          <q-timeline-entry :title="$t('devPages_devRootPage_exp_0_roleAndWhere')"
            :subtitle="$t('devPages_devRootPage_exp_0_when')" color="secondary" icon="keyboard_arrow_up" />
        </q-timeline>
      </q-item>
    </div>

    <div>
      <div class="h1 text-center q-pt-xl">
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
import { ref, computed, onMounted } from 'vue'
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

const startDate = new Date('2023-07-01') // Укажите вашу дату начала
const totalExperience = computed(() => {
  const now = new Date()
  const diffInMs = now - startDate
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25)
  const exp = Math.round(years * 10) / 10
  return exp < 2 ? 2 : exp
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

// Генерация звезд для анимации
const stars = ref([])

onMounted(() => {
  generateStars()
})

function generateStars() {
  const starsArray = []
  const count = 30 // Количество звезд

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 3 + 1 // Размер звезды (1-4px)
    const left = Math.random() * 100 // Позиция по горизонтали
    const duration = Math.random() * 10 + 25 // Длительность анимации (5-15 секунд)
    const delay = Math.random() * 1 // Задержка анимации (до 5 секунд)

    starsArray.push({
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.7)`
      }
    })
  }

  stars.value = starsArray
}
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
/* Анимация звездного фона */
.stars-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  will-change: transform, opacity;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>