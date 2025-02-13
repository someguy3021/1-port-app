<script setup>
import PortCards_Card_Dialog_Block from './PortCards_Card_Dialog_Block.vue';
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
// regarding the template:
// Any more of 70vh results in some weird bottom button bugs, and also scroll bugs. can't use full-height, it breaks the scroll
</script>

<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin no-scroll" style="width: 1400px; max-width: 95vw;">
            <q-card-section class="row bg-dark">
                <q-toolbar-title>{{ work.title?.[i18nLocale.locale.value] }}</q-toolbar-title>
                <q-btn v-close-popup flat round icon="close"></q-btn>
            </q-card-section>
            <q-separator />
            <q-card-section style="max-height: 70vh;" class="scroll q-pb-none q-px-none">
                <PortCards_Card_Dialog_Block
                    v-for="(block, index) in props.work.descriptionLong?.[i18nLocale.locale.value] || []" :key="index"
                    :block="block || {}" :workFolder="props.work.ihn || '0_general_pics'" />
                <q-card-actions class="q-pa-none" align="center" v-if="$q.screen.lt.md">
                    <q-btn class="text-capitalize full-width no-border-radius" color="accent" :label="$t('close')"
                        @click="onOKClick" size="lg" />
                </q-card-actions>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>