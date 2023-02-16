<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>
<style scoped lang="scss">
div {
  color: black;
  font-size: 3rem;
}
</style>
