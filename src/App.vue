<template>
<div id="app">
 
<nav class="bg-white mt-[-52px] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <router-link to="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CRUD</span>
    </router-link>
    <router-link class="bg-blue-500 p-2 rounded-xl text-blue-50" to="/getdata">Go to Create data</router-link>

  
  </div>
</nav>

  <router-view></router-view>
</div>
</template>

<script >
// import Post_data from './components/Post_data.vue' 

export default{
  // components:{
  //   Post_data
  // }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
