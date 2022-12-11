<template>
  <div >
    <header
      class="w-full bg-green-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
    >
      <div
        class="w-full container flex flex-wrap items-center justify-between mx-auto"
      >
        <a
          class="flex items-center"
        >
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="/dashboard"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                aria-current="page"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                @click="logOut()"
                class="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >Log Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="min-h-screen bg-gray-200 p-10">
      <div
        class="bg-gray-200 flex flex-col border-8 gap-y-8 border-white border-2 w-full max-w-5xl m-auto p-4 bg-white  rounded-lg shadow-md sm:p-6 md:p- flex items-center flex justify-center"
      >
      <div class="w-full py-4 rounded-lg">
        <form class="space-y-6" @submit.prevent="addLink(oldLink, newLink)">
          <h1
            class=" font-bold text-gray-900 md:p-0 text-black  underline flex justify-center text-6xl "
          >
            Shorten
          </h1>
          <div class="max-w-sm flex flex-col mx-auto gap-y-2">
            <label
              for="oldLink"
              class="block mb-2 text-sm font-bold text-gray-900 md:p-0 dark:text-white"
              >Drop Your Link : </label
            >
            <input
              type="url"
              name="oldLink"
              id="oldLink"
              class="flex w-full border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Link.com"
              v-model="oldLink"
              required
            />
            <label
              for="newLink"
              class="block mb-2 text-sm font-bold text-gray-900 md:p-0 dark:text-white"
              >Custom Link : </label
            >
            <input
              type="text"
              name="newLink"
              id="newLink"
              placeholder="A.K.A"
              class="mx-auto border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="newLink"
              required
            />
         
            <div class="mx-auto">
            <button
            type="submit"
            class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center "
          >
            Short Your Link
          </button>
          <br>
             <h1
              class=" font-bold text-gray-900 md:p-0 dark:text-white flex justify-center text-2xl "
            >
              Your Links :
            </h1>
            </div>
          </div>
        </form>  
</div>
          
          <div class="grid grid-cols-2 gap-8 ">
            <div
              class="p-4 bg-green-200 rounded-lg break-all flex flex-col justify-between border-4 border-white"
              v-for="link in links"
              :key="link"
            >
            <div class="flex flex-col">
              <h1 class="font-bold ">Custom Link :</h1>
              <a class="underline"  target="_blank" v-bind:href="link.newLink.slice(14)">{{ link.newLink }}</a>
              <h1 class="font-bold">Old Link :</h1>
              <a class="underline" target="_blank" v-bind:href="link.oldLink" >{{ link.oldLink }}</a>
              <h1 class="font-bold ">View Count : </h1>
              <p>{{ link.viewCount }}</p>
              </div>
              <div class="flex gap-x-3">
                <button
                  class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center"
                  @click="deleteLink(link.id)"
                >
                
                  Delete
                </button>
                <RouterLink :to="{ name: 'editLink', params: { id: link.id } }">
                  <button class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center">Edit</button>
                </RouterLink>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      currentUser: "",
      links: [],
    };
  },
  methods: {
    async logOut() {
      try {
        const res = await axios.get("http://localhost:3000/logout");
        console.log('logout');
        localStorage.removeItem("userToken");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    async addLink(oldLink, newLink) {
      try {
        const res = await axios.post("http://localhost:3000/link", {
          oldLink: oldLink,
          newLink: newLink,
          uid: localStorage.getItem("userToken"),
        });
        console.log("Add Link");
        this.getLinks();
      } catch (err) {
        console.log(err);
        this.getLinks();
      }
    },
    async getLinks() {
      this.links = [];
      try {
        const res = await axios
          .get("http://localhost:3000/links", {
            params: { uid: localStorage.getItem("userToken") },
          })
          .then((response) => {
            const links = response.data;
            this.links.push(...response.data);
            console.log("Get Link");
            console.log(response);
          });
      } catch (err) {
        console.log(err);
        this.getLinks();
      }
    },
    async deleteLink(id) {
      try {
        const res = await axios.delete(`http://localhost:3000/${id}`);
        console.log("delete");
        this.getLinks();
      } catch (err) {
        console.log(err);
        this.getLinks();
      }
    },
    checkId() {
      if(localStorage.getItem("userToken") == null || localStorage.getItem("userToken") == '') {
          this.$router.push("/")
        } else return;
    }
  },
  mounted() {
    this.getLinks();
  },
  beforeMount() {
    this.checkId()
  },
};
</script>
