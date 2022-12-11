<template>

  <router-view class="font-mono"></router-view>
</template>
// <script>
// import { RouterLink, RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'

// export default {
//   methods: {
//     async getInpo(){
//       try{
//         const res = await axios.get('http://localhost:8000/inpo')
//         console.log(res)
//       }
//       catch(err){
//         console.log(err)
//       }
//     },
//     async getKaryawans(){
//       try{
//         const res = await axios.get('http://localhost:8000/karyawan')
//         console.log(res)
//       }
//       catch(err){
//         console.log(err)
//       }
//     },
//     async postKaryawan(nama, email, tempat_lahir) {
//       try{
//         const res = await axios.post('http://localhost:8000/api/post',{
//           nama: nama,
//           email: email,
//           tempat_lahir: tempat_lahir
//         })
//         // // .then((response)=>{
//         // //   console.log(response)
        
//         // // })
//         console.log(res)
//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//   },
//   mounted() {
//     // this.getInpo()
//     // this.getKaryawans()
//   },
//   components: {
//     HomeView
//   }
// }
// </script>