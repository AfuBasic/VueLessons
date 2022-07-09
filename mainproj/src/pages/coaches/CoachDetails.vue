<template>
  <div>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hr</h3>
    </base-card>
    <base-card>
      <div>
        <h2>Interested? Reach out now!</h2>
        <router-link :to="contactLink">Contact</router-link>
        <router-view></router-view>
      </div>
    </base-card>
    <base-card>
      <base-label v-for="area in areas" :key="area" :title="area"></base-label>
      <p>{{ description }}</p>
    </base-card>
  </div>
</template>

<script>
import BaseLabel from '../../components/ui/BaseLabel.vue';

export default {
  props: ['id'],
  components: { BaseLabel },
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },

    areas() {
      return this.selectedCoach.areas;
    },

    rate() {
      return this.selectedCoach.hourlyRate;
    },

    contactLink() {
      return this.$route.path + '/contact';
    },

    description() {
      return this.selectedCoach.description;
    },
  },
  async created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
