import { defineStore } from "pinia";
import { getSideBar } from "../service/home";

export const useHomeStore = defineStore("home", {
    state: () => {
      return {
        sidebar:[]
      }
    },
    actions: {
      async getSideBar() {
        const response = await getSideBar();
        console.log(response.data);
        this.sidebar = response.data;
      },
    },
  });
