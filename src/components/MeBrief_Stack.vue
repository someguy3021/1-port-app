<template>
    <q-item>
        <q-item-section>
            <q-card flat bordered style="max-width: 650px" class="q-pa-md"
                :class="$q.dark.isActive ? 'border-solid-thickness1 border-color-darkborder1 border-radius-20' : ''">
                <div class="h4 q-pb-sm text-center">{{ $t("my_skills") }}</div>
                <div>
                    <q-chip v-for="(tech, index) in myStack" :key="index" :color="tech.colorBlock"
                        :text-color="tech.colorText" :icon="tech.icon">
                        {{ tech.name }}
                    </q-chip>
                </div>
            </q-card>
        </q-item-section>
    </q-item>
</template>

<script setup>
const myStack = [
    { name: 'Git', icon: 'fa-brands fa-github', colorBlock: 'grey-9', colorText: 'white' },
    { name: 'HTML', icon: 'fa-brands fa-html5', colorBlock: 'deep-orange-7', colorText: 'white' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt', colorBlock: 'blue-9', colorText: 'white' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', colorBlock: 'orange-9', colorText: 'white' },
    { name: 'TypeScript', icon: 'fa-brands fa-js', colorBlock: 'blue-9', colorText: 'white' },
    { name: 'Vite', icon: 'fa-brands fa-js', colorBlock: 'deep-purple-9', colorText: 'white' },
    { name: 'Unit-tests', icon: 'fa-brands fa-js', colorBlock: 'orange-9', colorText: 'white' },
    { name: 'Vue', icon: 'fa-brands fa-vuejs', colorBlock: 'green-7', colorText: 'white' },
    { name: 'Pinia', icon: 'fa-brands fa-vuejs', colorBlock: 'green-7', colorText: 'white' },
    { name: 'Quasar', icon: 'fa-brands fa-vuejs', colorBlock: 'blue-9', colorText: 'white' },
    { name: 'Adobe Photoshop', icon: 'fa-solid fa-image', colorBlock: 'blue-8', colorText: 'white' },
    { name: 'Adobe Illustrator', icon: 'fa-solid fa-image', colorBlock: 'orange-10', colorText: 'white' },
    { name: 'Figma', icon: 'fa-brands fa-figma', colorBlock: 'grey-10', colorText: 'white' },
    { name: 'SQL', icon: 'fa-solid fa-database', colorBlock: 'blue-9', colorText: 'white' },
    { name: 'FSD', icon: 'architecture', colorBlock: 'blue-9', colorText: 'white' },
    // { name: 'Node.js', icon: 'search', colorBlock: 'dark', colorText: 'white' },
    // { name: 'Express.js', icon: 'search', colorBlock: 'dark', colorText: 'white' },
]
</script>