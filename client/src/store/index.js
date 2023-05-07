import { createStore } from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const BackEndUrl = import.meta.env.VITE_API_URL;
import CONSTANTS from "./actionsConst.js";

export default createStore({
  state: {
    items: [],
    modal: false,
    isLoading: true,
  },
  getters: {
    // Get the state by using this getters, not use directly the store
    getItems: (state) => state.items,
    getModal: (state) => state.modal,
    getLoading: (state) => state.isLoading,
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

    async sendPhoto({ dispatch }, data) {
      // Receive {label: "imageLabel", image: "asdfglink"}

      var imagen = {
        id: uuidv4(),
        ...data,
      };

      try {
        await axios.post(`${BackEndUrl}/image`, imagen);
        console.log("se envio la fotico");
        dispatch("fetchItems");
      } catch (error) {
        console.log(error);
      }
    },

    showModalView({ commit }) {
      commit(CONSTANTS.SHOW_MODAL_VIEW);
    },
    hideModalView({ commit }) {
      commit(CONSTANTS.HIDE_MODAL_VIEW);
    },

    changeIsLoading({ commit }, status) {
      commit(CONSTANTS.ISLOADING, status);
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
    ISLOADING(state, status) {
      state.isLoading = status;
    },
  },
});
