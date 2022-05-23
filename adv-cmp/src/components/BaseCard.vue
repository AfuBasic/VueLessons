<template>
  <div>
    <div>
      <slot name="topSlot">
        <h2>The Default Content in the Slot</h2>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>
