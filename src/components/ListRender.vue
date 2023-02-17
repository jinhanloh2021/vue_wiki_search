<template>
  <ul>
    <li v-for="item in list" :key="String(item)">{{ item }}</li>
  </ul>
</template>
<script lang="ts">
export default {
  name: "ListRender",
  props: {
    list: Array,
  },
  components: {},
};
</script>
<style lang="scss">
div {
  margin: 0;
}
</style>
