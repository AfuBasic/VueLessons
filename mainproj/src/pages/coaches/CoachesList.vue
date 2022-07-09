<template>
  <div>
    <section id="filter">
      <div class="action-control">
        <button @click="loadCoaches(true)">Refresh Coaches</button>
        <base-button
          v-if="!isLoading && !isCoach"
          to="/register"
          title="New Coach"
        />
      </div>
      <div class="filter-control">
        <coach-filter @change-filter="setFilters"></coach-filter>
      </div>
    </section>

    <section id="coaches">
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
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
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },

    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        const errorMsg = error.message || 'Something went wrong';
        alert(errorMsg);
      }
      this.isLoading = false;
    },
  },

  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
section#filter {
  display: flex;
  flex-direction: column;
}

section#filter div {
  flex-grow: 1;
}

div.action-control {
  text-align: right;
  margin-bottom: 20px;
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
