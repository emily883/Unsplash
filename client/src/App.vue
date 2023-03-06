<script setup>
import Navbar from "./components/NavBar/Navbar.vue";
</script>

<template>
  <div class="App_Container">
    <Navbar />

    <masonry :cols="3" :gutter="30">
      <!-- <div v-for="(item, index) in items" :key="index">{{ item.id }}</div> -->
    </masonry>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "app",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          id: "5dbac075-f0b1-4a8f-8376-1b4c874ac2fc",
          label: "Silver-backed jackal",
          image: "http://dummyimage.com/233x100.png/ff4444/ffffff",
        },
        {
          id: "0b42019e-7ec0-4168-8174-cea30cc89610",
          label: "Southern brown bandicoot",
          image: "http://dummyimage.com/234x100.png/cc0000/ffffff",
        },
        {
          id: "d5b77cbb-30f8-4409-a384-c7e1c538b558",
          label: "Bustard, stanley",
          image: "http://dummyimage.com/178x100.png/cc0000/ffffff",
        },
        {
          id: "0a8e7e06-d77b-470e-9935-09cc58de11c3",
          label: "Gull, silver",
          image: "http://dummyimage.com/175x100.png/ff4444/ffffff",
        },
        {
          id: "90b05467-1930-427c-9ece-cd2db3c72933",
          label: "Possum, common brushtail",
          image: "http://dummyimage.com/182x100.png/ff4444/ffffff",
        },
        {
          id: "a8139526-72c1-4b87-bb7a-dc43a80321c6",
          label: "Giant anteater",
          image: "http://dummyimage.com/210x100.png/ff4444/ffffff",
        },
        {
          id: "7c211507-3f6b-44f2-9070-277164b98f91",
          label: "Red sheep",
          image: "http://dummyimage.com/150x100.png/cc0000/ffffff",
        },
        {
          id: "4072a90a-73ad-42d9-b742-d60b2a102484",
          label: "Green heron",
          image: "http://dummyimage.com/158x100.png/ff4444/ffffff",
        },
        {
          id: "7120a0e4-0b39-4990-b7be-099fdb54a482",
          label: "Constrictor, eastern boa",
          image: "http://dummyimage.com/234x100.png/5fa2dd/ffffff",
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
