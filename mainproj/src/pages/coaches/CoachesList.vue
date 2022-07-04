<template>
  <section id="filter">
    <div class="filter-control">Filter Coaches</div>
    <div class="action-control">
      <button>Refresh Coaches</button>
      <router-link to="/register">New Coach</router-link>
    </div>
  </section>
  <section id="coaches">
    <ul>
      <li>Coaches List</li>
    </ul>
  </section>
</template>

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

div.action-control a {
  display: inline-block;
  text-decoration: none;
  background: #df7861;
  font-size: 12px;
  color: #fff;
  padding: 8px 16px;
}
</style>
