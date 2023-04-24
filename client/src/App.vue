<script setup>
import Images from "./components/Images/Images.vue";
import Navbar from "./components/NavBar/Navbar.vue";
import AddPhoto from "./components/AddPhotoModal/AddPhoto.vue";
import { storeItems, modal } from "./store";
</script>

<template>
  <div class="ModalContainer">
    <AddPhoto v-show="modal.showModal" class="ModalPhoto" />
  </div>
  <div class="App_Container">
    <Navbar
      class="NavBar"
      v-bind:style="[
        modal.showModal
          ? { 'background-color': 'red' }
          : { 'background-color': 'blue' },
      ]"
    />
    <Images :items="storeItems.items" class="Images" />
  </div>
</template>

<style scoped>
.NavBar .Images {
}
.ModalContainer {
  display: flex;
  justify-content: center;
}
.ModalPhoto {
  /* margin-top: 5vw; */
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
</style>

<script>
export default {
  name: "app",
  components: {
    Navbar,
    Images,
    AddPhoto,
  },
  data() {
    return {
      storeItems,
      modal,
      caca: [
        {
          id: "5dbac075-f0b1-4a8f-8376-1b4c874ac2fc",
          label: "Silver-backed jackal",
          image:
            "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        },
        {
          id: "0b42019e-7ec0-4168-8174-cea30cc89610",
          label: "Southern brown bandicoot",
          image:
            "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        },
        {
          id: "d5b77cbb-30f8-4409-a384-c7e1c538b558",
          label: "Bustard, stanley",
          image:
            "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
        },
        {
          id: "0a8e7e06-d77b-470e-9935-09cc58de11c3",
          label: "Gull, silver",
          image:
            "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
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
    };
  },
  // methods: {
  //   getImages() {
  //     fetch("https://my.api.mockaroo.com/imagenes?key=fceb27d0")
  //       .then((response) => {
  //         response.json();
  //       })
  //       .then((response) => {
  //         this.images = [...this.images, response]
  //       });
  //   },
  // },
};
</script>
