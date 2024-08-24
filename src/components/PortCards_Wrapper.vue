<template>
  <q-item>
    <!-- <div class="wrapper-filters">
      <div
        v-if="$q.screen.width >= 880"
        class="btns-container flex items-center no-wrap q-gutter-x-md q-gutter-y-md q-mb-lg text-h3"
      >
        <q-btn
          label="По популярности"
          no-caps
          class="text-subtitle1"
          @click="typeOfFillter = 'По популярности'"
        />
        <q-btn
          label="По цене"
          no-caps
          class="text-subtitle1"
          @click="typeOfFillter = 'По цене'"
        />
        <q-btn
          label="По наименованию"
          no-caps
          class="text-subtitle1"
          @click="typeOfFillter = 'По наименованию'"
        />
        <q-btn
          label="По типу товара"
          no-caps
          class="text-subtitle1"
          @click="typeOfFillter = 'По типу товара'"
        />
        <q-btn
          label="Сначала избранное"
          no-caps
          class="text-subtitle1"
          @click="typeOfFillter = 'Сначала избранное'"
        />

        <q-icon
          name="close"
          size="md"
          class="q-ml-md cursor-pointer"
          v-ripple
          @click="clearFillter"
        />
      </div>
      <div v-else class="row flex-center q-mb-md no-wrap">
        <q-select
          standout
          v-model="typeOfFillter"
          :options="options"
          label="Фильтр"
          bg-color="secondary"
          color="black"
          class="full-width"
        />
        <q-icon
          name="close"
          size="md"
          class="q-ml-md cursor-pointer"
          v-ripple
          @click="clearFillter"
        />
      </div>
    </div> -->
    <div class="wrapper-cards-slider">
      <PortCards_Card v-for="work in worksData" :key="work.id" :work="work" />
    </div>
  </q-item>
</template>
  
<script setup>
import PortCards_Card from "./PortCards_Card.vue";
import { works } from "../stores/DB.json";
import { ref, onMounted } from "vue";

defineOptions({
  name: "PortCards_Wrapper",
});

// const typeOfFillter = ref("");
// const modelForFB = ref("");

// const $q = useQuasar();
// const options = ref([
//   "По популярности",
//   "По цене",
//   "По наименованию",
//   "По типу товара",
//   "Сначала избранное",
// ]);

const worksData = ref([]);

onMounted(async () => {
  getworksData();
});

async function getworksData() {
  //   const querySnapshot = await getDocs(collection(db, "worki"));
  //   let tempArr = [];
  //   querySnapshot.forEach((doc) => {
  //     tempArr.push({
  //       id: doc.id,
  //       ...doc.worksData(),
  //     });
  //   });
  let tempArr = works;
  console.log(tempArr);
  worksData.value = tempArr;
}

// async function fillterworksData(modelForFB) {
//   //   const querySnapshot = await getDocs(
//   //     query(collection(db, "worki"), orderBy(modelForFB))
//   //   );
//   //   let tempArr = [];
//   //   querySnapshot.forEach((doc) => {
//   //     tempArr.push({
//   //       id: doc.id,
//   //       ...doc.worksData(),
//   //     });
//   //   });
//   let tempArr = [];
//   worksData.value = tempArr;
// }

// async function clearFillter() {
//   getworksData();
//   typeOfFillter.value = "";
// }

// watch(typeOfFillter, () => {
//   switch (typeOfFillter.value) {
//     case "По популярности":
//       modelForFB.value = "popularity";
//       break;
//     case "По цене":
//       modelForFB.value = "price";
//       break;
//     case "По наименованию":
//       modelForFB.value = "name";
//       break;
//     case "По типу товара":
//       modelForFB.value = "type";
//       break;
//     case "Сначала избранное":
//       modelForFB.value = "popularity";
//     default:
//       return;
//   }
//   fillterworksData(modelForFB.value);
// });
</script>
  