<template>
  <button @click="onClick()">Click Me</button>
  <p>{{ num }}</p>
</template>
<script lang="ts">
export default {
  name: "Button",
  props: {
    text: String,
  },
  methods: {
    onClick() {
      console.log("Clicked");
      this.num++;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
};
</script>
<style lang="scss">
div {
  margin: 0;
}
</style>
