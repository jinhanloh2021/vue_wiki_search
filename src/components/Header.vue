<template>
  <div>{{ title }}</div>
  <Button text="My Button" />
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>
<style scoped lang="scss">
div {
  color: black;
  font-size: 3rem;
}
</style>
