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
  data() {
    return {
      filteredItems: [],
    };
  },
  created() {
    if (this.searchTerm) {
      this.filterItems();
    } else {
      this.filteredItems = this.items;
    }
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter((item) =>
        item.label?.toLowerCase().includes(this.searchTerm.toLowerCase())
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
<!-- 
<template>
  <div class="card-columns">
    <div class="card border-0 custom-card" :key="item.id" v-for="item in items">
      <card :images="item" />
    </div>
    <div v-if="items && !filteredList().length" class="no-results">
      {{ noResultsMessage }}
    </div>
  </div>
</template>

<style src="./Images.modules.css"></style>

<script>
import card from "../Card/Card.vue";
let input = ref("")

export default {
  name: "Images",
  components: {
    card,
  },
  props: {
    items: Array,
  },
  data() {
    return {};
  },
  methods: {
    filteredList() {
      return items.filter((item) =>
        item.toLowerCase().includes(input.value.toLowerCase())
      );
    },
  },
};
</script> -->
