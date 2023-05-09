import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import AddPhotoModal from "../components/AddPhotoModal/AddPhotoModal.vue";

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

  it("renders correctly", async () => {
    const wrapper = mount(AddPhotoModal, { global: { plugins: [store] } });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".Titulo span").text()).toBe("Add a new Photo");
    expect(wrapper.find(".CancelButton").text()).toBe("Cancel");
    expect(wrapper.find(".SubmitButton").text()).toBe("Submit");
  });

  it("sets the data object on input", async () => {
    const wrapper = mount(AddPhotoModal, { global: { plugins: [store] } });
    const labelInput = wrapper.find(".InputLabel");
    const photoUrlInput = wrapper.find(".InputPhoto");

    await labelInput.setValue("Test label");
    await photoUrlInput.setValue("https://test.com/test.jpg");
  });

  it("should render modal title", async () => {
    const wrapper = mount(AddPhotoModal, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find(".Titulo span").text()).toBe("Add a new Photo");
  });

  it("should submit when both label and image input are filled", async () => {
    const wrapper = mount(AddPhotoModal, {
      global: {
        plugins: [store],
      },
    });

    const labelInput = wrapper.find(".InputLabel");
    await labelInput.setValue("Test label");

    const imageInput = wrapper.find(".InputPhoto");
    await imageInput.setValue("https://test-image.com");

    const submitButton = wrapper.find(".SubmitButton");
    await submitButton.trigger("click");

    expect(store.getters.getModal).toBe(false);
  });

  it("calls close method when close button is clicked", async () => {
    const wrapper = mount(AddPhotoModal, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find(".Close").trigger("click");

    expect(store.state.modal).toBe(false);
  });

  it('should close the modal when Cancel button is clicked', async () => {
    const wrapper = mount(AddPhotoModal, {
      global: {
        plugins: [store],
        mocks: {
          $store: store,
        },
      },
    });
  
    const cancelButton = wrapper.find('.CancelButton');
    await cancelButton.trigger('click');
  
    expect(store.getters.getModal).toBe(false);
  });
  
});
