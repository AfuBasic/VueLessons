<template>
  <nav-bar></nav-bar>
  <div class="main-content">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/Layout/NavBar.vue';
export default {
  components: {
    NavBar,
  },

  created() {
    this.$store.dispatch('autoLogin');
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

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
}
</style>
