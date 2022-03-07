<template>
  <li>
    <h2>{{ name }} {{ isFavoriteFriend === "0" ? "" : "(Favorite)" }}</h2>
    <button @click="toggleFavorite">
      {{ isFavoriteFriend === "0" ? "Make" : "Remove" }} Favorite
    </button>
    <button @click="toggleVisibility">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      isFavoriteFriend: this.isFavorite,
    };
  },

  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.isFavoriteFriend === "1") {
        this.isFavoriteFriend = "0";
      } else {
        this.isFavoriteFriend = "1";
      }
    },
  },
};
</script>
