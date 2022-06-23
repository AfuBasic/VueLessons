<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="addOne">Add 10</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
  methods: {
    addOne() {
      //   this.$store.commit('increase', { value: 10 });
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
