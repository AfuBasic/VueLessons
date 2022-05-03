<template>
  <form @submit.prevent="submitForm">
    <div class="input-field">
      <label for="">Friend Name</label>
      <input type="text" v-model="friend.name" required />
    </div>
    <div class="input-field">
      <label for="">Friend Email</label>
      <input type="email" v-model="friend.email" required />
    </div>
    <div class="input-field">
      <label for="">Friend Phone</label>
      <input type="text" v-model="friend.phone" required />
    </div>
    <div class="input-field">
      <label for="">&nbsp;</label>
      <button type="submit">Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      friend: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },

  methods: {
    submitForm() {
      this.$emit("add-friend", this.friend);
    },
  },
};
</script>
