<template>
  <div>
    <div>
      <slot name="topSlot"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>
