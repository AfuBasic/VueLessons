<template>
  <div>
    <h1>{{ counter }}</h1>
    <p>We Do More...</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
