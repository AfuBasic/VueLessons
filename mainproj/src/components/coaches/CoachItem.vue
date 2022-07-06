<template>
  <li>
    <div class="profile-top-section">
      <span class="profile-extract">{{ initials }}</span>
    </div>
    <div class="main-section">
      <h3 class="fullname">{{ fullName }}</h3>
      <h4 class="rate">${{ rate }}/hour</h4>
      <div class="areas">
        <base-label
          v-for="area in areas"
          :key="area"
          :title="area"
        ></base-label>
      </div>
      <div class="actions">
        <base-button :to="coachContactLink" title="Contact" />
        <base-button :to="coachDetailsLink" title="View Details" />
      </div>
    </div>
  </li>
</template>

<script>
import BaseLabel from '../ui/BaseLabel.vue';

export default {
  components: {
    BaseLabel,
  },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas', 'description'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },

    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },

    initials() {
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.lastName.charAt(0).toUpperCase()
      );
    },
  },
};
</script>

<style scoped>
li {
  display: block;
  box-shadow: 0 5px 3px #ccc;
  background: #fff;
  border-radius: 5px;
}
div.profile-top-section {
  background: rgb(34, 0, 89);
  color: #fff;
  text-align: center;
  border-radius: 5px 5px 0 0;
  padding: 40px;
}

div.profile-top-section span {
  display: inline-block;
  background: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  font-size: 40px;
  font-weight: bold;
  line-height: 100px;
  color: rgb(34, 0, 89);
}

div.main-section {
  padding: 20px;
}

h3.fullname {
  margin: 0;
  font-weight: bolder;
  font-size: 18px;
}

h4.rate {
  margin: 0;
  padding-bottom: 20px;
  font-size: 13px;
  color: #555;
}

div.areas {
  text-align: center;
  padding: 15px 0;
}

div.actions {
  text-align: center;
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 20px;
}

div.actions a {
  text-decoration: none;
  display: inline-block;
  background-color: #df7861;
  color: #fff;
  font-size: 11px;
  padding: 8px;
  margin: 0 5px;
  border-radius: 5px;
}
</style>
