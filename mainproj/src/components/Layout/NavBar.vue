<template>
  <div>
    <ul>
      <li><router-link to="/coaches">Coaches</router-link></li>
      <li v-if="isLoggedIn">
        <router-link to="/requests">Requests</router-link>
      </li>
      <li v-else><router-link to="/auth">Login</router-link></li>
      <li v-if="isLoggedIn">
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 3px #ccc;
}

li {
  display: inline;
}

li a {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: #df7861;
  border: none;
  transition: 0.3s;
}

li a:hover {
  background: #df7861;
  color: #fff;
}
</style>
