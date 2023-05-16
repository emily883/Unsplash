import { createStore } from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import CONSTANTS from "./actionsConst.js";

const BackEndUrl = import.meta.env.VITE_API_URL;

export default createStore({
  state: {
    items: [],
    modal: false,
    isLoading: true,
    error: null,
  },
  getters: {
    getItems: (state) => state.items,
    getModal: (state) => state.modal,
    getLoading: (state) => state.isLoading,
    getError: (state) => state.error,
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get(`${BackEndUrl}/list`);
        commit(CONSTANTS.SET_ITEMS, response.data.reverse());
      } catch (error) {
        // console.log(error.response.data.message);
        commit(CONSTANTS.SET_ERROR, error.response.data.message);
      }
    },

    async sendPhoto({ dispatch }, data) {
      try {
        const imagen = {
          id: uuidv4(),
          ...data,
        };
        await axios.post(`${BackEndUrl}/image`, imagen);
        dispatch("fetchItems");
      } catch (error) {
        // console.log(error.response.data.message);
        dispatch("setError", error.response.data.message);
      }
    },

    async deletePhoto({ commit, dispatch, state }, id) {
      try {
        // Delete first the photo on the DOM
        commit(
          CONSTANTS.SET_ITEMS,
          state.items.filter((item) => item.id !== id)
        );

        await axios.delete(`${BackEndUrl}/image/${id}`);
        dispatch("fetchItems");
      } catch (error) {
        console.log(error.response.data.message);
        dispatch("setError", error.response.data.message);
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

    setError({ commit }, error) {
      commit(CONSTANTS.SET_ERROR, error);
    },
  },
  mutations: {
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

    SET_ERROR(state, error) {
      state.error = error;
    },
  },
});
