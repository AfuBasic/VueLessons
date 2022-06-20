<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" v-model="user" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Tunde', 'Basic', 'Afuwape', 'Idris', 'Ayinde'],
      user: '',
    };
  },

  methods: {
    addUser() {
      this.users.unshift(this.user);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #e1e1e1;
  padding: 1rem;
  text-align: center;
}
</style>
