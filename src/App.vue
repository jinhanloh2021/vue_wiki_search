<template>
  <h1 class="myh1">Hello world</h1>
  <span>
    <h1 class="myh1">Nested H1</h1>
  </span>
  <Header title="My Title" />
  <ListRender v-bind:list="list" />
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import ListRender from "./components/ListRender.vue";
export default {
  name: "App",
  components: { Header, ListRender },
  data() {
    return {
      list: ["Cat", "Dog", "Squirrel", "Monkey", "Kangaroo"],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
</style>
<style lang="scss" scoped>
h1 {
  color: green;
}

span {
  h1 {
    color: purple;
  }
}
</style>
