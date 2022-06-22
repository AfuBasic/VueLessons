<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="addOne">Add 1</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>
