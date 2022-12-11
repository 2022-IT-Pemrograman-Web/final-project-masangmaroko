import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  addDoc,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm6Oe6rBqTMdBmga_41QB9qQzrr3WJtJA",
  authDomain: "ets-vue.firebaseapp.com",
  databaseURL: "https://ets-vue-default-rtdb.firebaseio.com",
  projectId: "ets-vue",
  storageBucket: "ets-vue.appspot.com",
  messagingSenderId: "299657414646",
  appId: "1:299657414646:web:ab259b05082dcb45c769d7",
  measurementId: "G-JFVNV7YNER",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useStore = defineStore({
  id: "main",
  state: () => ({
    counter: 0,
    store: [],
    length_store: 0,
  }),
  actions: {
    async increment() {
      await addDoc(collection(db, "store"), {
        counter: 1,
      });
      console.log("Added successfully");
    },
    async getCounter() {
      onSnapshot(collection(db, "store"), (querySnapshot) => {
        let store = [];
        querySnapshot.forEach((doc) => {
          store.push({
            data: doc.data(),
            id: doc.id,
          });
        });
        this.store = store;
      });
    },
    getLength() {
      return this.store.length;
    },
    async DeleteCounter(id_counter) {
      await deleteDoc(doc(db, "store", id_counter.toString()));
      console.log("Delete successfully");
    },
    async IncreaseSubCounter(id_counter) {
      let id = this.store.findIndex((item) => item.id == id_counter);
      let counter = this.store[id].data.counter++;
      await updateDoc(doc(db, "store", id_counter.toString()), {
        counter: counter,
      });
      console.log("Increment successfully");
    },
    async DecreaseSubCounter(id_counter) {
      let id = this.store.findIndex((item) => item.id == id_counter);
      let counter = this.store[id].data.counter--;
      await updateDoc(doc(db, "store", id_counter.toString()), {
        counter: counter,
      });
      console.log("Decrement successfully");
    },
  },
});
