<template>
  <div>
    <h2>4<span>0</span>4</h2>
    <p>
      You have reached this page because the intended page could not be found
    </p>
    <router-link to="/">&larr; Home</router-link>
  </div>
</template>

<style scoped>
div {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-rows: 1fr auto 1fr;
  margin-top: 100px;
}

h2 {
  font-size: 100px;
  margin: 0;
  letter-spacing: -20px;
}

h2 span {
  color: #fff;
  text-shadow: 0 0 3px #999;
}

p {
  margin: 0;
  font-style: italic;
}

a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  padding: 10px;
  background: #df7861;
}
</style>
