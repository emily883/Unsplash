<template>
  <div class="card-columns">
    <transition-group name="list">
      <lazy-component
        class="card border-0 custom-card"
        :key="item.id"
        v-for="item in filteredItems"
      >
        <card :images="item" />
      </lazy-component>
    </transition-group>
    <div v-if="noResults" class="no-results">{{ noResultsMessage }}</div>
  </div>
</template>

<style src="./Images.modules.css"></style>

<script>
import card from "../Card/Card.vue";

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
  computed: {
    filteredItems() {
      // if we are searching then we filtered
      if (this.searchTerm) {
        return this.items.filter((item) =>
          item.label?.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        // if not return the items, this return inside the computed, convert the `this.items` on a reactive variable
        return this.items;
      }
    },
    noResults() {
      return this.filteredItems.length === 0 && this.searchTerm.length !== 0;
    },
  },
};
</script>
