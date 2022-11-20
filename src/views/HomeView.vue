<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ title }} - GajiHub</template>
    <template v-slot:description="{ content }">{{ description }} - GajiHub</template>
  </metainfo>
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
import { watch } from "vue";
import { useMeta, useActiveMeta } from "vue-meta";

export default {
  setup() {
    const { meta } = useMeta({
      base: { href: window.location.origin, target: "_blank" },
      charset: "utf8",
      title: "My Title",
      description: "The Description",
      og: {
        title: "Og Title",
        description: "Bla bla",
        type: "website",
        url: window.location.origin,
        site_name:
          "Software Payroll &amp; HRIS Terbaik &amp; Gratis di Indonesia - Gajihub",
        card: "summary_large_image",
        image: [],
      },
      twitter: {
        title: "Twitter Title",
      },

      htmlAttrs: {
        amp: true,
        lang: ["id"],
      },
    });

    setTimeout(() => (meta.title = "My Updated Title"), 2000);

    const metadata = useActiveMeta();

    watch(metadata, (newValue) => {
      //console.log("META UPDATED", newValue);
    });

    return {
      metadata,
    };
  },
  name: "HomeView",
  components: {
    Header,
    Process,
    Benefit,
    Pricelist,
    TestimonyVue,
    MediapartnerVue,
  },
  data() {
    return {
      title: "Software Payroll &amp; HRIS Terbaik &amp; Gratis di Indonesia - Gajihub",
      description:
        "Software Payroll &amp; Aplikasi HRIS yang memudahkan pengelolaan manajemen SDM dan bisa Anda gunakan secara praktis dan gratis. Coba Gajihub sekarang juga.",
    };
  },
  mounted() {
    localStorage.removeItem("relatedprice");
    console.log(this.metadata);
    this.metadata.og.description = this.description;
    this.metadata.og.title = this.title;
  },
};
</script>
