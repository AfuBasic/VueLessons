<template>
  <section>
    <base-card>
      <template v-slot:topSlot>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

<style>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
