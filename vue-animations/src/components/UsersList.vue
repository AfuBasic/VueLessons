<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
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

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-50px);
  border: 1px solid green;
  color: green;
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
  border: 1px solid #e1e1e1;
  color: black;
}

.user-list-leave-active {
  transition: all 1s ease-in;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
  border: 1px solid red;
  background: red;
  color: white;
}
</style>
