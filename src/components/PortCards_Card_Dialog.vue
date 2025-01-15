<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin" style="width: 1400px; max-width: 90vw;">
            <q-toolbar class="bg-primary">
                <q-toolbar-title>{{ work.title?.[i18nLocale.locale.value] }}</q-toolbar-title>
                <q-btn v-close-popup flat round icon="close"></q-btn>
            </q-toolbar>
            <q-card-section style="max-height: 80vh;" class="scroll">
                <q-card-section class="full-width"
                    v-for="(index) in work.descriptionLong?.[i18nLocale.locale.value]?.length" :key="index"
                    :class=work.descriptionLong?.[i18nLocale.locale.value]?.[index]?.[0]>
                    <p :class="work.descriptionLong?.[i18nLocale.locale.value]?.[index - 1]?.[1]?.[1]">
                        {{ work.descriptionLong?.[i18nLocale.locale.value]?.[index - 1]?.[1]?.[0] }}
                    </p>
                    <div :class="work.descriptionLong?.[i18nLocale.locale.value]?.[index - 1]?.[1]?.[4]">
                        <img v-bind:src="`works_imgs/${work.descriptionLong?.[i18nLocale.locale.value]?.[index - 1]?.[1]?.[3]}.webp`"
                            class="rounded-borders full-width" alt="#">
                    </div>

                </q-card-section>
            </q-card-section>


            <!-- buttons example -->
            <!-- <q-card-actions align="right">
                <q-btn color="primary" label="OK" @click="onOKClick" />
                <q-btn color="primary" label="Cancel" @click="onDialogCancel" />
            </q-card-actions> -->
        </q-card>
    </q-dialog>
</template>

<script setup>
defineOptions({
    name: "PortCards_Card_Dialog",
});
import { useDialogPluginComponent } from 'quasar'

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();
const props = defineProps({
    work: {
        type: Object,
    },
});

// console.log(props)
defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
])
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome

// this is part of our example (so not required)
function onOKClick() {
    // on OK, it is REQUIRED to
    // call onDialogOK (with optional payload)
    onDialogOK()
    // or with payload: onDialogOK({ ... })
    // ...and it will also hide the dialog automatically
}
</script>

<style lang="scss">
.work_dialog_inner_textAndPicture {
    display: flex;
}

.work_dialog_inner_textOnly {
    display: flex;
}

.work_dialog_inner_PictureAndText {
    display: flex;
}

.work_dialog_inner_PictureOnly {
    display: flex;
}
</style>