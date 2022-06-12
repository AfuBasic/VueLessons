<template>
  <span>
    <the-header title="Welcome"></the-header>
    <the-resource></the-resource>
  </span>
</template>

<script>
import TheHeader from "./components/Layouts/TheHeader.vue";
import TheResource from "./components/learning-resources/TheResource.vue";

export default {
  components: {
    TheHeader,
    TheResource,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
