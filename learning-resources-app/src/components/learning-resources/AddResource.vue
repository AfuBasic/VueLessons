<template>
  <span>
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @closeDialog="confirmError"
    >
      <template #default>
        <p>Unfortunately, at lease one input value is invalid.</p>
        <p>
          Please check all input and make sure you enter at least one characters
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="titleInput" />
        </div>

        <div class="form-control">
          <label for="title">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            ref="descInput"
          ></textarea>
        </div>

        <div class="form-control">
          <label for="title">Link</label>
          <input id="link" name="link" type="url" ref="linkInput" />
        </div>

        <div>
          <base-button type="submit">Submit</base-button>
        </div>
      </form>
    </base-card>
  </span>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  inject: ["addResource"],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
