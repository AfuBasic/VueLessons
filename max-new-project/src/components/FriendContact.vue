<template>
  <li>
    <h2>{{ name }} {{ !isFavorite ? "" : "(Favorite)" }}</h2>
    <button @click="toggleFavorite">
      {{ !isFavorite ? "Make" : "Remove" }} Favorite
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
  // props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: {
    "toggle-favorite": function (id) {
      if (!id) console.warn("ID is missing");
      return true;
    },
  },

  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      // this.isFavoriteFriend = !this.isFavoriteFriend;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
