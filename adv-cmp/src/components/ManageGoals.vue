<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set goal</button>
    <error-alert v-if="invalidInput">
      <h2>Error</h2>
      <p>Please enter a valid input</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },

  data() {
    return {
      invalidInput: false,
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.invalidInput = true;
      }
    },

    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>
