import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import Card from "../components/Card/Card.vue";

describe("Card", () => {
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

  it("should render an image with a label and a delete button", async () => {
    // Configura aquí los datos que quieres pasar al componente
    const images = {
      id: 1,
      image: "https://example.com/image.jpg",
      label: "Example Image",
    };

    const wrapper = mount(Card, {
      props: { images },
      global: { plugins: [store] },
    });

    // Verifica que el componente renderice correctamente la imagen y el botón de eliminar
    const img = wrapper.find("img");
    expect(img.attributes("src")).to.equal(images.image);
  });

  it("should render the image label", async () => {
    const images = {
      id: 1,
      image: "https://example.com/image.jpg",
      label: "Example Image",
    };
  
    const wrapper = mount(Card, {
      props: { images },
      global: { plugins: [store] },
    });
  
    const label = wrapper.find(".ImageLabel");
    expect(label.text()).to.equal(images.label);
  });

  it("should set hover to true on mouseenter", async () => {
    const images = {
      id: 1,
      image: "https://example.com/image.jpg",
      label: "Example Image",
    };
  
    const wrapper = mount(Card, {
      props: { images },
      global: { plugins: [store] },
    });
  
    const div = wrapper.find("div");
    await div.trigger("mouseenter");
    expect(wrapper.vm.hover).to.be.true;
  });
  
  it("should set hover to false on mouseleave", async () => {
    const images = {
      id: 1,
      image: "https://example.com/image.jpg",
      label: "Example Image",
    };
  
    const wrapper = mount(Card, {
      props: { images },
      global: { plugins: [store] },
    });
  
    const div = wrapper.find("div");
    await div.trigger("mouseenter");
    await div.trigger("mouseleave");
    expect(wrapper.vm.hover).to.be.false;
  });
  

});
