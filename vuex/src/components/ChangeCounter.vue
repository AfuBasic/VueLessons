<template>
  <button @click="increment">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    //   this.$store.dispatch('numbers', {
    //     type: 'increment',
    //   });
    // },
    ...mapActions('numbers', {
      increment: 'increment',
    }),
  },
};
</script>
