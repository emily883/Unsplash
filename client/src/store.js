import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const BackEndUrl = import.meta.env.VITE_API_URL;

export const storeItems = reactive({
  items: [],

  isLoading: true,

  async loadItems() {
    try {
      const response = (await axios.get(`${BackEndUrl}/list`)).data;
      storeItems.items = response;
      storeItems.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },

  async addItem(item) {
    // Receive {label: "sdf", image: "imageLink"}
    // Whatever function to add and item
    // item["id"] = uuidv4();
    storeItems.isLoading = true;
    var imagen = {
      id: uuidv4(),
      ...item,
    };
    try {
      await axios.post(`${BackEndUrl}/image`, imagen);
      await storeItems.loadItems();
    } catch (error) {
      console.log(error);
    }
  },

  async deleteItem(ItemId) {
    // Whatever function to delete an item
    try {
      storeItems.isLoading = true;
      await axios.delete(`${BackEndUrl}/image/${ItemId}`);
      await storeItems.loadItems();
    } catch (error) {
      console.log(error);
    }
  },

  SearchTerm: "",

  setSearchTerm: (term) => {
    storeItems.SearchTerm = term;
  },
});

export const modal = reactive({
  showModal: false,
  openModal() {
    this.showModal = true;
  },
  closeModal() {
    this.showModal = false;
  },
});
