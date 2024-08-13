<template>
  <q-item
    class="q-mx-none"
    style="padding-right: 16px; padding-left: 16px"
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
  >
    <q-item-section
      style="flex: auto; align-items: center"
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
      <q-item-label style="text-align: center; min-width: 40px">{{
        $t(props.title)
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLinkHeader",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>

<style>
.q-item__section--side {
  padding-right: 0px;
}
</style>