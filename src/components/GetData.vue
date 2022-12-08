<template>
  <div class="getData">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input v-model="searchQuery" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr >
            <th scope="col" class="py-3 px-6">accountId</th>
            <th scope="col" class="py-3 px-6">arrivingArabicName</th>
            <th scope="col" class="py-3 px-6">arrivingEnglishName</th>
            <th scope="col" class="py-3 px-6">sort</th>
            <th scope="col" class="py-3 px-6">Action</th>
          </tr >
        </thead>
        <tbody >
          <tr
            v-for="(item, idx) in alldata"
            :key="idx"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              v-html="item.accountId"
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            ></th>
            <td v-html="item.arrivingArabicName" class="py-4 px-6"></td>
            <td v-html="item.arrivingEnglishName" class="py-4 px-6"></td>
            <td v-html="item.sort" class="py-4 px-6"></td>

            <td class="py-4 gap-1 flex px-6">
              <button
                @click="sendidx(item.id)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                edit
              </button>
              <button
                @click="() => deteItem(item.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  <div v-if="(alldata.length > 1)">
    <button @click="()=> valePagnation --" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Previous
</button>

<!-- Next Button -->
<button @click="()=> valePagnation ++" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Next
</button>

  </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      arr: [],
      value: [],
      valePagnation: 3,
      searchQuery: null,
    };
  },
  methods: {
    async deteItem(id) {
      console.log(typeof id, "id");

      await axios({
        method: "post",
        url: "http://40.127.194.127:777/api/Emergency/DeleteArrivingMethod/",
        headers: {
          "Content-Type": "application/json",
        },
        data: id,
      }).then((re) => {
        console.log(re);
        return this.getdata();
      });
    },
    getdata() {
      axios
        .get(
          "http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods?first=0&page=0&rows=20"
        )
        .then((response) => (this.arr = response.data.data));
    },
    sendidx(idx) {
      this.$store.dispatch("filtred", idx);
      this.$router.push("/idpage");
    },
  },
  computed: {
    ...mapGetters(["filtred"]),

    alldata() {
      if (this.searchQuery) {
                return this.arr.filter((item) => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => item.arrivingArabicName.toLowerCase().includes(v));
                });
           
            } else {
              return JSON.parse(JSON.stringify(this.arr.slice(0, this.valePagnation)));
            }
        
    },
  },
  mounted() {
    this.getdata();

    console.log(this.filtred);
  },
};
</script>
