<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-list
        v-for="friend in friends"
        :name="friend.name"
        :email-address="friend.email"
        :phone-number="friend.phone"
        :is-favorite="friend.isFavorite"
        :key="friend.id"
        :id="friend.id"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-list>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "tunde",
          name: "Afuwape Tunde",
          email: "afuidris@gmail.com",
          phone: "0808678798",
          isFavorite: true,
        },
        {
          id: "biodun",
          name: "Afuwape Abiodun",
          email: "afubiodun@gmail.com",
          phone: "0808678798",
          isFavorite: false,
        },
      ],
    };
  },

  methods: {
    toggleFavoriteStatus(friendId) {
      const clickedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      clickedFriend.isFavorite = !clickedFriend.isFavorite;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
body {
  margin: 20px;
}

* {
  font-family: "Mali", cursive;
}

header {
  background-color: purple;
  padding: 15px;
  color: white;
  text-align: center;
  border-radius: 15px;
}

ul {
  padding: 0;
  list-style-type: none;
}

#app ul li {
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 5px #c1c1c1;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 25px;
  transition: 0.3s;
}

#app li h2 {
  margin: 20px 0;
  border-bottom: 2px solid #ccc;
  padding: 0 0 10px 0;
}

#app li button {
  border: none;
  background: orange;
  color: #eee;
  padding: 10px;
  border-radius: 3px;
  margin: 0 0 15px 0;
  cursor: pointer;
}

#app li li {
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
}
</style>
