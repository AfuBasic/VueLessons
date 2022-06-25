<template>
  <div>
    <h1>{{ normalizedCounter }}</h1>
    <button @click="increase({ value: 10 })">Add 10</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['normalizedCounter']),
  },
  methods: {
    //   this.$store.commit('increase', { value: 10 });
    //   this.$store.commit({
    //     type: 'increase',
    //     value: 10,
    //   });

    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // ...mapActions(['increase']),

    ...mapActions({
      increase: 'increase',
    }),
  },
};
</script>
