<template>
  <div class="grid justify-center items-center h-screen grid-cols-1">
    <div class="main-container">
      <div class="w-full bg-neutral-3" v-if="loading">
        <div
          class="bg-primary-light text-xs font-medium text-white text-center p-0.5 leading-none transition-all delay-1000"
          :style="{ width: progressWidth + '%' }"
        >
          {{ progressWidth }}%
        </div>
      </div>

      <form @submit.prevent="handleForm">
        <h3 class="text-2xl mb-5">Upload Product</h3>

        <div
          class="bg-state-success text-white text-sm p-4 mb-10 rounded-lg"
          v-if="success"
        >
          Product Added Successfully
        </div>

        <div class="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div class="text-left">
            <label for="" class="block">Product Name</label>
            <input
              type="text"
              class="form-input"
              v-model="form.productName"
              placeholder="Product Name"
              required
            />
          </div>

          <div class="text-left">
            <label for="" class="block">Product Price</label>
            <input
              type="number"
              class="form-input"
              v-model="form.productPrice"
              placeholder="Product Price"
              required
            />
          </div>

          <div class="text-left">
            <label for="" class="block">Product Rating</label>
            <input
              type="number"
              class="form-input"
              v-model="form.productRating"
              placeholder="Product rating"
              min="1"
              max="5"
              required
            />
          </div>

          <div class="text-left">
            <label for="" class="block">Product Categories</label>
            <select class="form-input" v-model="form.productCategory" required>
              <option value=""></option>
              <option value="Fashion">Fashion</option>
              <option value="Shoes">Shoes</option>
              <option value="Jewelries">Jewelries</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div class="text-left lg:col-span-2">
            <label for="" class="block">Product Images</label>
            <input
              type="file"
              class="form-input"
              placeholder="Product rating"
              @change="updateProductImage"
              accept="image/*"
              ref="file"
              multiple
              required
            />
          </div>

          <div class="text-left lg:col-span-2">
            <label for="">Description</label>
            <textarea
              rows="5"
              class="form-input resize-none"
              placeholder="Product Description"
              v-model="form.description"
              required
            ></textarea>
          </div>

          <div class="text-left lg:col-span-2">
            <button class="" :disabled="loading">
              {{ loading ? "Adding Product..." : "Add Product" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      progressWidth: 0,
      loading: false,
      success: false,
      form: {
        productName: "",
        productPrice: 0,
        productRating: 0,
        productCategory: "",
        productImages: [],
        description: "",
      },
    };
  },

  methods: {
    async handleForm() {
      this.loading = true;
      await this.uploadImagesToCloudinary();

      try {
        await axios.post(
          "https://vue-shop-d1974-default-rtdb.firebaseio.com/products.json",
          {
            name: this.form.productName,
            price: this.form.productPrice,
            rating: this.form.productRating,
            category: this.form.productCategory,
            images: this.form.productImages,
            description: this.form.description,
          }
        );
        this.success = true;

        this.resetForm();
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
    },

    updateProductImage(e) {
      const files = e.target.files;
      this.form.productImages = [];
      for (let a = 0; a < files.length; a++) {
        this.form.productImages.push(files[a]);
      }
    },

    resetForm() {
      this.form = {
        productName: "",
        productPrice: 0,
        productRating: 0,
        productCategory: "",
        productImages: [],
        description: "",
      };
      this.$refs.file.value = "";
    },

    async uploadImagesToCloudinary() {
      const files = this.form.productImages;

      this.form.productImages = [];
      const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
      for (let a = 0; a < files.length; a++) {
        this.progressWidth = 0;
        let request = await axios.post(
          url,
          {
            file: files[a],
            upload_preset: "docs_upload_example_us_preset",
          },
          {
            onUploadProgress: (progressEvent) => {
              let perc = Math.ceil(
                (progressEvent.loaded / progressEvent.total) * 100
              );

              this.progressWidth = perc;
            },
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        let response = request.data;

        this.form.productImages.push(response.secure_url);
      }
    },
  },
};
</script>

<style scoped>
.form-input {
  @apply w-full;
}

.form-input:focus {
  @apply border-primary-light ring-0;
}

.main-container {
  @apply bg-white shadow-md border border-neutral-3 lg:w-2/4 md:w-3/4 sm:w-full text-center mx-auto rounded-md p-5;
}

button {
  @apply w-full bg-primary-light text-white p-3 shadow-lg rounded-md transition-all delay-75 border;
}

button:hover {
  @apply bg-white border-primary-light text-primary-light;
}

button:disabled {
  @apply bg-neutral-2 text-neutral-3 border-neutral-2;
}
</style>
