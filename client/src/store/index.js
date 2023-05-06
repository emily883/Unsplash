import { createStore } from "vuex";
import axios from "axios";
const BackEndUrl = import.meta.env.VITE_API_URL;
import CONSTANTS from "./actionsConst.js";

export default createStore({
  state: {
    items: [],
    modal: false,
  },
  getters: {
    // Get the state by using this getters, not use directly the store
    getItems: (state) => state.items,
    getModal: (state) => state.modal,
  },
  actions: {
    // Actions are the logic part
    async fetchItems({ commit }) {
      try {
        const response = await axios.get(`${BackEndUrl}/list`);
        commit(CONSTANTS.SET_ITEMS, response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async sendPhoto({commit},data){
      // Receive {label: "asdf", image: "asdfg"}
      
    },

    showModalView({ commit }) {
      commit(CONSTANTS.SHOW_MODAL_VIEW);
    },
    hideModalView({ commit }) {
      commit(CONSTANTS.HIDE_MODAL_VIEW);
    },
  },
  mutations: {
    // Just to modify the store, do not add logic here
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SHOW_MODAL_VIEW(state) {
      state.modal = true;
    },
    HIDE_MODAL_VIEW(state) {
      state.modal = false;
    },
  },
});
