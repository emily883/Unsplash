import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
//uuidv4();

export const storeItems = reactive({
  items: [
    {
      id: "5dbac075-f0b1-4a8f-8376-1b4c874ac2fc",
      label: "Silver-backed jackal",
      image:
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    },
    {
      id: "90b05467-1930-427c-9ece-cd2db3c72933",
      label: "Possum, common brushtail",
      image:
        "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
    },
    {
      id: "a8139526-72c1-4b87-bb7a-dc43a80321c6",
      label: "Giant anteater",
      image:
        "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    },
    {
      id: "7c211507-3f6b-44f2-9070-277164b98f91",
      label: "Red sheep",
      image:
        "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    },
    {
      id: "4072a90a-73ad-42d9-b742-d60b2a102484",
      label: "Green heron",
      image:
        "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
    },
    {
      id: "7120a0e4-0b39-4990-b7be-099fdb54a482",
      label: "Constrictor, eastern boa",
      image:
        "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    },
  ],

  addItem(item) {
    // Receive {label: "sdf", image: "imageLink"}
    // Whatever function to add and item
    // item["id"] = uuidv4();
    var imagen = {
      id: uuidv4(),
      ...item
    }
    console.log(imagen);
  },

  deleteItem() {
    // Whatever function to delete an item
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
