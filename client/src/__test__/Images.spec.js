import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Images from "../components/Images/Images.vue";

describe("Images", () => {
  it("renders no results message when there are no items and a search term is entered", async () => {
    
    const wrapper = mount(Images, {
      props: {
        items: [],
        searchTerm: "search term",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find(".no-results").exists()).toBe(true);
  });

  it("renders no items when the items array is empty", async () => {
    const wrapper = mount(Images, {
      props: {
        items: [],
        searchTerm: "",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".custom-card")).toHaveLength(0);
    expect(wrapper.find(".no-results").exists()).toBe(false);
  });

  it("filters items when a search term is entered", async () => {
    const items = [
      { id: 1, label: "label 1" },
      { id: 2, label: "label 2" },
    ];

    const wrapper = mount(Images, {
      props: {
        items,
        searchTerm: "label 1",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".custom-card")).toHaveLength(1);
    expect(wrapper.find(".custom-card").text()).toContain("label 1");
  });
  
  it("filters items case-insensitively", async () => {
    const items = [
      { id: 1, label: "Label 1" },
      { id: 2, label: "Label 2" },
      { id: 3, label: "Label 3" },
    ];

    const wrapper = mount(Images, {
      props: {
        items,
        searchTerm: "label 1",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".custom-card")).toHaveLength(1);
    expect(wrapper.find(".custom-card").text()).toContain("Label 1");
  });

  it("filters items based on the label property", async () => {
    const items = [
      { id: 1, name: "item 1", description: "description 1", label: "label 1" },
      { id: 2, name: "item 2", description: "description 2", label: "label 2" },
      { id: 3, name: "item 3", description: "description 3", label: "label 3" },
    ];

    const wrapper = mount(Images, {
      props: {
        items,
        searchTerm: "label 2",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".custom-card")).toHaveLength(1);
    expect(wrapper.find(".custom-card").text()).toContain("label 2");
  });

  it("filters items when a search term is entered and updates when the search term changes", async () => {
    const items = [
      { id: 1, label: "label 1" },
      { id: 2, label: "label 2" },
      { id: 3, label: "label 3" },
    ];

    const wrapper = mount(Images, {
      props: {
        items,
        searchTerm: "",
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".custom-card")).toHaveLength(items.length);

    await wrapper.setProps({ searchTerm: "label 1" });

    expect(wrapper.findAll(".custom-card")).toHaveLength(1);
    expect(wrapper.find(".custom-card").text()).toContain("label 1");

    await wrapper.setProps({ searchTerm: "label" });

    expect(wrapper.findAll(".custom-card")).toHaveLength(items.length);
  });

});
