<template>
    <q-item>
        <q-item-section>
            <q-card flat bordered style="max-width: 650px" class="q-pa-md">
                <q-card-section class="row flex items-center"
                    :class="$q.screen.lt.sm ? 'justify-around' : 'justify-between'">
                    <div class="q-pr-md text-h4 text-center q-pt-sm">{{ $t("devPages_devRootPage_me_name") }}</div>
                    <div class="q-pl-md flex">
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