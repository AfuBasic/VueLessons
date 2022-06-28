<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <base-counter></base-counter>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth"> <user-auth></user-auth> </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    BaseCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    ...mapGetters(['userIsAuthenticated']),
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
