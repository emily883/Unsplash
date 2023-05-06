import { createStore } from "vuex";
import axios from "axios";
const BackEndUrl = import.meta.env.VITE_API_URL;

export default createStore({
  state: {
    items: [],
  },
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get(`${BackEndUrl}/list`);
        commit("SET_ITEMS", response.data);
        console.log("cargaron los items")
      } catch (error) {}
    },
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
  },
});
