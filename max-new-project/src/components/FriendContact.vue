<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVisibility">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "tunde",
        name: "Afuwape Tunde",
        phone: "09087876898",
        email: "email@owner.com",
      },
    };
  },

  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
