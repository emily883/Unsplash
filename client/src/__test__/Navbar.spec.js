import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import Navbar from "../components/NavBar/Navbar.vue";

describe("Navbar", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        modal: false,
      },
      getters: {
        getModal: (state) => state.modal,
      },
      actions: {
        showModalView({ commit }) {
          commit("SHOW_MODAL_VIEW");
        },

        hideModalView({ commit }) {
          commit("HIDE_MODAL_VIEW");
        },
      },
      mutations: {
        SHOW_MODAL_VIEW(state) {
          state.modal = true;
        },

        HIDE_MODAL_VIEW(state) {
          state.modal = false;
        },
      },
    });
  });

  it("renders the Navbar component", () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it("Has a class 'sticky-top'", () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find(".navbar-container").classes("sticky-top")).toBe(true);
  });

  it("has a logo with class 'large-logo'", () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find(".Logo img").classes("large-logo")).toBe(true);
  });

  it("has an 'Add a photo' button", () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find(".button button").text()).toBe("Add a photo");
  });

  it("Emits a 'searching' event when the search input value is changed", async () => {
    window.scrollTo = () => {};
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    const searchInput = wrapper.find("#Input_search");
    await searchInput.setValue("test");

    expect(wrapper.emitted("searching")).toBeTruthy();
    expect(wrapper.emitted("searching")[0]).toEqual(["test"]);
  });

  it("Opens the modal when the 'Add a photo' button is clicked", async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    const addPhotoButton = wrapper.find(".button button");
    await addPhotoButton.trigger("click");
    expect(store.state.modal).toBeTruthy();
  });
  
});
