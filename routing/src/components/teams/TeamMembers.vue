<template>
  <div class="overlay">
    <section>
      <h2>{{ teamName }}</h2>
      <ul>
        <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
        ></user-item>
      </ul>
      <router-link to="/teams/t2">Go to Team2</router-link>
      <button @click="this.$router.back()">Back</button>
    </section>
  </div>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },

  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const selectedMembers = [];

      for (const member of selectedTeam.members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },

  created() {
    this.loadTeamMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('BeforeRouteupdate guard');
    console.log(to, from);
    next();
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
  background: #fff;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

div.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>
