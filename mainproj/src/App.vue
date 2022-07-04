<template>
  <nav-bar></nav-bar>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Layout/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');

body {
  margin: 0;
  background: #e1e1e1;
}

* {
  font-family: 'roboto';
}

.main-content {
  padding: 20px 20em;
}
</style>
