<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="email">Message</label>
        <textarea rows="5" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">
        Please ensure all fields are valid
      </p>
      <div class="actions">
        <button type="submit">Send Message</button>
      </div>
    </form>
    <div class="loader">
      <p v-if="isLoading">Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
      isLoading: false,
    };
  },

  methods: {
    async submitForm() {
      this.isLoading = true;
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }

      const payload = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };
      try {
        await this.$store.dispatch('requests/contactCoach', payload);
        this.$router.replace('/requests');
        this.isLoading = false;
      } catch (error) {
        alert(error.message || 'Somethingn went wrong');
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
