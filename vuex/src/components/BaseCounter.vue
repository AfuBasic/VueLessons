<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="addOne">Add 10</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['finalCounter']),
  },
  methods: {
    addOne() {
      //   this.$store.commit('increase', { value: 10 });
      //   this.$store.commit({
      //     type: 'increase',
      //     value: 10,
      //   });

      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
