<template>
<div class="min-h-screen bg-red-200 p-10">
      <div
        class="bg-green-700 flex flex-col border-8 gap-y-8 border-white border-2 w-full max-w-5xl m-auto p-4  rounded-lg shadow-md sm:p-6 md:p- flex items-center flex justify-center"
      >
      <div class="w-full py-4 rounded-lg">
        <form class="space-y-6" @submit.prevent="editLink(this.ids)">
          <h1
            class=" font-bold text-gray-900 md:text-white md:p-0 dark:text-white  underline flex justify-center text-2xl "
          >
            Edit Link
          </h1>
          <div class="max-w-sm flex flex-col mx-auto gap-y-2">
            <label
              for="oldLink"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Enter Link</label
            >
            <input
              type="text"
              ref="oldLink"
              :placeholder="this.links.find(link => link.id == this.ids).oldLink"
              class="flex w-full border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              for="newLink"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >127.0.0.1:5173/p/</label
            >
            <input
              type="text"
              ref="newLink"
              :placeholder="this.links.find(link => link.id == this.ids).id"
              class="mx-auto border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <div class="mx-auto">
              <div class="flex gap-x-3">
                <button
                  class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center"
                  @click="deleteLink(link.id)"
                >
                
                  Delete
                </button>
                  <button @click="$router.push('/dashboard')" class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center">Back</button>
              </div>
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
              <a class="underline" @click="getRedirect(link.id)" target="_blank" v-bind:href="link.newLink.slice(14)">{{ link.newLink }}</a>
              <h1 class="font-bold">Old Link :</h1>
              <p class="underline" >{{ link.oldLink }}</p>
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
                  <button @click="$router.push('/dashboard')" class="text-white bg-red-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center">Back</button>
              </div>
              
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="h-screen flex bg-gray-200">
      <div
        class="bg-gray-200 border border-green-500 w-full max-w-5xl m-auto p-4 bg-white rounded-lg shadow-md sm:p-6 md:p-8 flex items-center flex justify-center"
      >
        <form class="space-y-6" >
          <h1
            class="text-xl font-medium text-gray-900 dark:text-white flex justify-center"
          >
            Edit Link
          </h1>
          <div class="max-w-sm flex flex-col mx-auto gap-y-4">
            <label
              for="oldLink"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Enter Link</label
            >
            <input
              type="text"
              ref="oldLink"
              :placeholder="this.links.find(link => link.id == this.ids).oldLink"
              class="flex w-full border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              for="newLink"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >127.0.0.1:5173/p/</label
            >
            <input
              type="text"
              ref="newLink"
              :placeholder="this.links.find(link => link.id == this.ids).id"
              class="mx-auto border-2 border-green-500 bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <div class="mx-auto">
        <button
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex "
            type="submit"
          >
            Edit Link
        </button>
            <button
            @click="$router.push('/dashboard')"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex justify-center"
          >
            Back
          </button>
  

          </div>
          </div>
        </form>
      </div>
    </div>
  </div>