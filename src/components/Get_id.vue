<template>
  Update id nymber : {{filtred}}
  <form class="mt-[10px] m-auto max-w-[800px]" @submit.prevent="addData">
    <div class="mb-6">
      <label
        for="te"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >arrivingArabicName</label
      >
      <input
        v-model="arrivingArabicName"
        type="text"
        id="te"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >arrivingEnglishName</label
      >
      <input
        v-model="arrivingEnglishName"
        type="text"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >sort</label
      >
      <input
        v-model="sort"
        type="text"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      accountId: 1,
      arrivingArabicName: "",
      arrivingEnglishName: "",
      sort: "",
    };
  },
  methods: {
    async addData() {
      await axios({
        method: "post",
        url: "http://40.127.194.127:777/api/Emergency/AddOrUpdateArrivingMethod",
        data: {
          accountId: this.accountId,
          arrivingArabicName: this.arrivingArabicName,
          arrivingEnglishName: this.arrivingEnglishName,
          sort: this.sort,
          id: this.filtred,
        },
      }).then((res) => {
        console.log(res, "red here");
      });
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["filtred"]),
  },
  mounted(){
    console.log(this.id)
  }
};
</script>

<style>
form {
  border: 1px solid blue;
  padding: 20px;
}
</style>
