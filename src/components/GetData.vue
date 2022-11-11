<template>
  <div class="getData">
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">accountId</th>
            <th scope="col" class="py-3 px-6">arrivingArabicName</th>
            <th scope="col" class="py-3 px-6">arrivingEnglishName</th>
            <th scope="col" class="py-3 px-6">sort</th>
            <th scope="col" class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in arr"
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
  },
  mounted() {
    this.getdata();
   
    console.log(this.filtred)

  },
};
</script>

