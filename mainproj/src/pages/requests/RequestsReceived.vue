<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="!isLoading && hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.messages"
        ></request-item>
      </ul>
      <h3 v-else-if="hasRequests && !Loading">
        You haven't received any requests yet
      </h3>
      <base-spinner v-else></base-spinner>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },

  methods: {
    async loadRequests() {
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        alert(error || 'Something went wrong, could not load requests');
      }
    },
  },

  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
