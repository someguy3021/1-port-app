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
            <img v-bind:src="`works_imgs/${blockImgName}.webp`" :class="blockImgClasses" class="full-width" alt="#">
        </div>
    </div>
    <div class="any_block_wrapper row q-py-md" v-if="blockClass == 'work_dialog_inner_PictureAndText'"
        :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-lg'">
        <div class="col-12 col-md"><img v-bind:src="`works_imgs/${blockImgName}.webp`" :class="blockImgClasses"
                class="full-width" alt="#"></div>
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
        <img v-bind:src="`works_imgs/${blockImgName}.webp`" :class="blockImgClasses" class="full-width" alt="#">
    </div>
</template>

<script setup>
import { computed } from 'vue'
// Overall this is a component for displaying any kind of block in portcards dialog
defineOptions({
    name: "PortCards_Card_Dialog_Block",
});
const props = defineProps({ // Block contains a type of block (text or img or combined) and all the specific data like the text itself, img paths etc
    block: {
        type: Object,
    },
});
// console.log(props.block?.[1]?.[1]?.[1])

const blockClass = computed(() => props.block?.[0])

// const blockText = computed(() => props.block?.[1]?.[1]?.[1])
const blockTextsAndClasses = computed(() => props.block?.[1]) // heres an array of arrays with classes and text [["h3", "text"],["h6","text."]]
const blockImgClasses = computed(() => props.block?.[2]?.[0])
const blockImgName = computed(() => props.block?.[2]?.[1])
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