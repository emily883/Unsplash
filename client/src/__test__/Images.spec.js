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
});
