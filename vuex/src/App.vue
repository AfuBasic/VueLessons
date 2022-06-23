<template>
  <base-container title="Vuex">
    <base-counter></base-counter>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    BaseCounter,
    ChangeCounter,
    FavoriteValue,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
