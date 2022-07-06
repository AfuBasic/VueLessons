<template>
  <router-link :to="to">{{ title }}</router-link>
</template>

<script>
export default {
  props: ['to', 'title'],
};
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  background: #df7861;
  font-size: 12px;
  color: #fff;
  padding: 8px 16px;
}
</style>
