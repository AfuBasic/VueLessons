<template>
  <base-card>
    <h2>{{ mode === 'login' ? 'Login' : 'Signup' }}</h2>
    <base-spinner v-if="isLoading"></base-spinner>
    <form v-else @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <p v-if="!formIsValid">Please ensure the email and password is valid</p>

      <div>
        <button type="submit">{{ submitCaption }}</button>
        <button type="button" @click="switchAuthMode">
          {{ switchButtonCaption }}
        </button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
    };
  },

  computed: {
    submitCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },

    switchButtonCaption() {
      return this.mode === 'login' ? 'Signup Instead' : 'Login Instead';
    },
  },

  methods: {
    async submitForm() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      const userPayload = {
        email: this.email,
        password: this.password,
      };

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', userPayload);
        } else {
          await this.$store.dispatch('signup', userPayload);
        }
        this.$router.replace('/coaches');
      } catch (err) {
        alert(err.message || 'Failed, Please try again later');
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

.form-control p {
  margin: 0;
  margin-bottom: 10px;
  font-size: 13px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 20px;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

button {
  margin-right: 20px;
}
</style>
