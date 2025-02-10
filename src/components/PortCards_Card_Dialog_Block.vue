<template>
    <div class="any_block_wrapper row q-py-md" v-if="blockClass == 'work_dialog_inner_textAndPicture'"
        :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
        <div class="col-12 col-md q-py-md flex" :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
            <div class="self-center">
                <div :class="blockText?.[0]" v-for="(blockText) in blockTextsAndClasses" :key="blockText"
                    :style="{ whiteSpace: 'pre-line' }" v-text="blockText?.[1]">
                </div>
            </div>
        </div>
        <div class="col-12 col-md" :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
            <q-img v-bind:src="imgURL_Pub" :class="blockImgClasses" class="full-width" style="max-height: 500px;"
                spinner-color="secondary" fit="scale-down" alt="#" />
            <!-- <img src="~assets/works_imgs/1_this_website/vuei18n.webp" alt="dsadasdasdasdasdasdsadasdasdas"> -->
            <!-- <img :src="require('./vuei18n.webp')" alt=",nmb,mn,bn,bncbncvncnbv"> -->
            <!-- <q-img :src="require('@/assets/ign/works_imgs/1_this_website/vuei18n.webp')" alt="Image" /> -->
            <!-- <img v-if="imageUrl" :src="imageUrl" :class="blockImgClasses" alt="Block Image"
                @error="imageUrl = defaultImageUrl"> -->
        </div>
    </div>
    <div class="any_block_wrapper row q-py-md" v-if="blockClass == 'work_dialog_inner_PictureAndText'"
        :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
        <div class="col-12 col-md"><q-img v-bind:src="imgURL_Pub" :class="blockImgClasses" style="max-height: 500px;"
                spinner-color="secondary" fit="scale-down" class="full-width" alt="#" />
        </div>
        <div class="col-12 col-md q-py-md flex" :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
            <div class="self-center">
                <div :class="blockText?.[0]" v-for="(blockText) in blockTextsAndClasses" :key="blockText"
                    :style="{ whiteSpace: 'pre-line' }" v-text="blockText?.[1]">
                </div>
            </div>
        </div>
    </div>
    <div class="any_block_wrapper q-py-md" v-if="blockClass == 'work_dialog_inner_textOnly'"
        :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
        <div :class="blockText?.[0]" v-for="(blockText) in blockTextsAndClasses" :key="blockText"
            :style="{ whiteSpace: 'pre-line' }" v-text="blockText?.[1]">
        </div>
    </div>
    <div class="any_block_wrapper q-py-md" v-if="blockClass == 'work_dialog_inner_PictureOnly'"
        :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
        <q-img v-bind:src="imgURL_Pub" :class="blockImgClasses" class="full-width" spinner-color="secondary"
            fit="scale-down" alt="#" />
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
// Overall this is a component for displaying any kind of block in portcards dialog
defineOptions({
    name: "PortCards_Card_Dialog_Block",
});
const props = defineProps({ // Block contains a type of block (text or img or combined) and all the specific data like the text itself, img paths etc
    block: {
        type: Object,
    },
    workFolder: {
        type: String,
    }
});
// console.log(props.block?.[1]?.[1]?.[1])
const workFolder = computed(() => {
    if (!props.workFolder || !props.workFolder) return '';
    return `${props.workFolder}/`;
});

const blockClass = computed(() => props.block?.[0])

// const blockText = computed(() => props.block?.[1]?.[1]?.[1])
const blockTextsAndClasses = computed(() => props.block?.[1]) // heres an array of arrays with classes and text [["h3", "text"],["h6","text."]]
const blockImgClasses = computed(() => props.block?.[2]?.[0])
// const blockImgQuasarfit = computed(() => props.block?.[2]?.[1])
const blockImgName = computed(() => props.block?.[2]?.[1])
const blockImgType = computed(() => props.block?.[2]?.[2])
const imgTypeMap = {
    0: 'webp',
    1: 'png',
    2: 'jpg',
}
const imgType = computed(() => {
    const type = blockImgType.value
    if (type === undefined) {
        console.warn(`Image format doesn't exist in picture array. Falling back to webp format.`)
        return 'webp'
    } else if (type in imgTypeMap) {
        return imgTypeMap[type]
    } else {
        console.warn(`Unknown image type: ${type}. Falling back to webp format.`)
        return 'webp'
    }
})
const imgURL_Pub = `works_imgs/${workFolder.value}${blockImgName.value}.${imgType.value}`;
// // failed at making those pics src folder --------failed at making those pics src folder --------failed at making those pics src folder --------
// const defaultImageUrl = '~assets/ign/works_imgs/1_this_website/vuei18n.webp';
// const imageUrl = ref(null);

// onMounted(async () => {
//     if (blockImgName && blockImgType !== undefined && blockImgType !== null) {
//         try {
//             const imageModule = await import(`~assets/works_imgs/${workFolder}${blockImgName}.${imgType}`);
//             imageUrl.value = imageModule.default;
//         } catch (error) {
//             console.error("Failed to load image:", error);
//             imageUrl.value = defaultImageUrl;
//         }
//     } else {
//         imageUrl.value = defaultImageUrl;
//     }
// });
// const imageUrl = computed(() => {
//     return new URL(`works_imgs/${workFolder.value}${blockImgName.value}.${imgType.value}`, import.meta.url).href;
// }); // failed at making those pics src folder
</script>

<style lang="scss">
.any_block_wrapper {
    width: 100%;
}

.work_dialog_inner_PictureAndText {
    display: flex;
}

.work_dialog_inner_textAndPicture {
    display: flex;
}

.work_dialog_inner_textOnly {
    display: flex;
}

.work_dialog_inner_PictureOnly {
    display: flex;
}
</style>