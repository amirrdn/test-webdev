<template>
  <Header />
  <Process />
  <Benefit />
  <Pricelist />
  <TestimonyVue />
  <MediapartnerVue />
</template>

<script>
import Header from "@/components/Header.vue";
import Process from "@/components/Prosess.vue";
import Benefit from "@/components/Benefit.vue";
import Pricelist from "@/components/Pricelist.vue";
import TestimonyVue from "@/components/Testimony.vue";
import MediapartnerVue from "@/components/Mediapartner.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Process,
    Benefit,
    Pricelist,
    TestimonyVue,
    MediapartnerVue,
  },
  mounted() {
    localStorage.removeItem("relatedprice");
  },
};
</script>
