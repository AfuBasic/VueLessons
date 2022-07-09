<template>
  <div :style="style">
    <span>{{ labelTitle }}</span>
  </div>
</template>

<script>
import { secondaryColor } from '../../utils/colors';

export default {
  props: ['title'],
  computed: {
    labelTitle() {
      return this.title.charAt(0).toUpperCase() + '' + this.title.substring(1);
    },
  },
  data() {
    return {
      style: {
        backgroundColor: secondaryColor,
      },
    };
  },
};
</script>

<style scoped>
div {
  padding: 10px;
  display: inline-block;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  margin: 0 5px;
}
</style>
