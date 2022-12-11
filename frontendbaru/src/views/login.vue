<template>
<div>
  <header class="w-full bg-green-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div class="w-full container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img
            src="https://i.pinimg.com/originals/a2/42/82/a242827215b5384139c7ed853a5ad1c3.png "
            class="h-7 mr-3 sm:h-12"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap md:text-white md:p-0 dark:text-white"
            >Masang Maroko</span
          >
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/register" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Register</a>
        </li>
        <li>
          <a href="/" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</a>
        </li>
      </ul>
    </div>
  </div>
</header>
<div class="h-screen flex bg-gray-200">
    <div class="bg-gray-200 border border-green-500 w-full max-w-sm m-auto  p-4 bg-white  rounded-lg shadow-md sm:p-6 md:p-8 flex items-center flex justify-center">
        <form class="space-y-6" @submit.prevent="loginUser(email, password)" >
            <h5 class="text-xl font-medium text-gray-900 dark:text-white flex justify-center">Login</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" class="w-72 border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email@gmail.com" v-model="email" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="mx-auto border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" v-model="password" required>
            <a id="cek" class="text-red-700 text-sm"></a>
            </div>
            <div class="flex justify-center">
            <button type="submit"  class="w-24 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center">Login</button>
            </div>
        </form>
    </div>
</div>
</div>
</template>
  
  <script>
  import axios from 'axios'
  
  export default {
    methods: {
      async loginUser(email, password){
        try {
          console.log("jajan")
          const res = await axios.post('http://localhost:3000/login',{
            email: email,
            password: password
          })
          .then((response)=>{
            const userId = response.data.uid
            if(response.data.code == "auth/wrong-password"){
              this.$router.push("/")
              document.getElementById('cek').innerHTML = "Wrong password!"
              console.log("gak bisa boss")
            }else if(response.data.code == "auth/user-not-found"){
              this.$router.push("/")
              document.getElementById('cek').innerHTML = "User not found!"
              console.log("cek")
            }else {
              localStorage.setItem("userToken", userId);;
              this.$router.push("/dashboard")
            }
          })
          // console.log(res.data)
          // localStorage.setItem("userToken", res.data.uid);
          // this.$router.push("/dashboard")
        }
        catch(err) {
          console.log(err)
        }
      },
      check() {
        if(localStorage.getItem("userToken") != null) {
          this.$router.push("/dashboard")
        } else 
        return;
      }
      
      // async getUser(){
        
      //   try{
      //     const res = await axios.get('http://localhost:3000/get/user')
      //     .then((response)=>{
      //       this.users.push(...response.data)
      //     })
      //     console.log(res)        
      //   }
      //   catch(err){
      //     console.log(res)
      //   }
      // },
      
    },
    beforeMount() {
      this.check()
    },
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  