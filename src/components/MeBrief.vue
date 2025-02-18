<template>
    <q-item>
        <q-item-section>
            <q-card flat bordered style="max-width: 650px" class="q-pa-md"
                :class="$q.dark.isActive ? 'border-solid-thickness1 border-color-darkborder1' : ''">
                <q-card-section class="row flex items-center"
                    :class="$q.screen.lt.lg ? 'justify-around' : 'justify-between'">
                    <div class=" text-h4 text-center q-pt-sm" :class="$q.screen.lt.lg ? '' : 'q-pr-md'">{{
                        $t("devPages_devRootPage_me_name") }}</div>
                    <div class="flex" :class="$q.screen.lt.lg ? '' : 'q-pl-md'">
                        <q-btn class="q-mx-sm" disable round color="dark" icon="fa-brands fa-telegram" size="lg" />
                        <q-btn class="q-mx-sm" disable round color="dark" icon="fa-brands fa-github" size="lg" />
                        <q-tooltip class="bg-negative text-black text-body2 shadow-alwaysBlack-20 q-pa-sm"
                            :offset="[10, 10]">{{
                                $t("not_yet_available") }}
                        </q-tooltip>
                    </div>
                </q-card-section>
                <q-separator color="accent" size='2px' />
                <q-card-section>
                    <div class="h6 text-subtitle2 q-pa-sm">{{ $t("devPages_devRootPage_me_aboutMe") }}</div>
                </q-card-section>
            </q-card>
        </q-item-section>
    </q-item>
</template>

<script>
</script>