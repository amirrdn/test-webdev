<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footers />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footers from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footers,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
}
@import "./App.scss";
</style>
