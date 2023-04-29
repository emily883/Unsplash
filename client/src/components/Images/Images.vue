<template>
  <div class="card-columns">
    <div class="card border-0" :key="item.id" v-for="item in filteredItems">
      <card :images="item" />
    </div>
    <div v-if="noResults" class="no-results">{{ noResultsMessage }}</div>
  </div>
</template>

<style src="./Images.modules.css"></style>

<script>
import card from "../card/card.vue";

export default {
  name: "Images",
  components: {
    card,
  },
  props: {
    items: Array,
    searchTerm: String,
    noResultsMessage: {
      type: String,
      default: "No results",
    },
  },
  data() {
    return {
      filteredItems: [],
    };
  },
  created() {
    this.filterItems();
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter((item) =>
        item.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  computed: {
    noResults() {
      return this.filteredItems.length === 0 && this.searchTerm.length !== 0;
    },
  },
  watch: {
    searchTerm() {
      this.filterItems();
    },
  },
};
</script>
