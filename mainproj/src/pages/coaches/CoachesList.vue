<template>
  <section id="filter">
    <div class="filter-control">Filter Coaches</div>
    <div class="action-control">
      <button>Refresh Coaches</button>
      <base-button to="/register" title="New Coach" />
    </div>
  </section>
  <section id="coaches">
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :description="coach.description"
        :areas="coach.areas"
        :id="coach.id"
      ></coach-item>
    </ul>

    <h3 v-else>No Coaches Found!</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
section#filter {
  display: flex;
  flex-direction: row;
}

section#filter div {
  flex-grow: 1;
}

div.action-control {
  text-align: right;
}

div.action-control button {
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  margin-right: 10px;
}

section#coaches ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 20px;
}
</style>
