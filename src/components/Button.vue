<template>
  <button @click="onClick()">{{ text }}</button>
  <p>{{ num }}</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//Need to use defineComponent to enable type inference
export default defineComponent({
  name: "Button",
  props: {
    text: String,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    onClick(): void {
      this.num++;
    },
  },
});
</script>
<style lang="scss">
div {
  margin: 0;
}
</style>
