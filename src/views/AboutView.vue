<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ title }} - GajiHub</template>
  </metainfo>
  <article id="header" class="pb-md-4 pb-lg-5 pt-lg-3">
    <div class="container pt-5 pb-5 pb-md-3">
      <div class="row">
        <div class="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
          <h1 class="fs-1 text-break text-center mb-0">Tentang GajiHub</h1>
        </div>
      </div>
    </div>
  </article>
  <article id="section-1">
    <section
      class="parallax text-white parallax-0"
      data-parallax="https://kledo.com/wp-content/uploads/2020/05/kledo-building.jpg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 30"
        width="100%"
        height="50"
        fill="var(--white)"
        class="overlay-top overlay-flip-y"
      >
        <polygon points="100,30 0,30 0,25 100,0"></polygon>
      </svg>
      <div class="container py-5">
        <div class="row py-3">
          <div class="col-md-6">
            <img
              class="img-fluid rounded-2 shadow mb-4"
              width="600"
              height="400"
              src="https://kledo.com/wp-content/uploads/2020/05/kledo-building-768x605.jpg"
            />
          </div>
          <div class="col-md-6">
            <p class="fs-6 lh-4">
              GajiHub dimulai untuk mengubah dan mempermudah proses pengelolaan HR dan
              payroll bisnis kecil. Dari yang serba konvensional, menjadi bisnis yang
              lebih baik, transparan dan mampu bersaing di kancah nasional dan global.
              Software HR dan payroll online GajiHub membantu merapikan sisi administrasi
              dan pengeloaan manajemen SDM untuk usaha kecil dan menengah. <br />
              <br />
              GajiHub telah membantu lebih dari 5.000 pebisnis, dan kami baru memulainya.
              Kami tak akan berhenti berjuang bersama usaha kecil Indonesia. Saat ini
              bisnis kecil identik dengan pengelolaan HR yang tidak baik, aturan yang
              tidak sesuai dengan undang-undang ketenagakerjaan, dan tidak tertib
              administrasi. <br />
              <br />
              Hal itu salah satunya disebabkan karena minimnya akses pebisnis UMKM ke
              teknologi terbaru yang sangat memudahkan. Karena itu GajiHub hadir,
              mendekatkan pebisnis pada teknologi, dan meng-upgrade bisnis ke level
              berikutnya.
            </p>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 30"
        width="100%"
        height="50"
        fill="var(--white)"
        class="overlay-bottom"
      >
        <polygon points="0,0 100,25 100,30 0,30"></polygon>
      </svg>
    </section>
  </article>
  <article>
    <div class="container py-5">
      <div class="row py-3">
        <div class="col-md-6">
          <p class="fs-6 lh-4">
            Berkantor pusat di Jogja, GajiHub dikelilingi oleh talenta-talenta muda yang
            sangat inovatif. Kota pelajar yang dipenuhi oleh anak muda dengan kemampuan
            teknologi tinggi dan mempunyai gairah besar untuk membantu negeri.
          </p>
          <br />
          <div class="fs-6 mb-2"><b>Hubungi Kami :</b></div>
          <div class="fs-6 mb-2">
            <a
              class="text-decoration-none color-inherit"
              href="https://wa.me/6281222800070"
              rel="noopener"
              target="_blank"
            >
              +62 81 222 8000 70 (WA only)
            </a>
          </div>
          <div class="fs-6 mb-2">
            <a
              class="text-decoration-none color-inherit"
              href="mailto:hello@gajihub.com"
              rel="noopener"
              target="_blank"
            >
              hello@gajihub.com
            </a>
          </div>
          <div class="fs-6 mb-2">
            <a
              class="text-decoration-none color-inherit"
              href="https://goo.gl/maps/nhV6K5kEeW5BNAUW6"
              rel="noopener"
              target="_blank"
            >
              Jl. Kledokan No B10, Catur Tunggal, Depok, DIY, 55281
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="embed-responsive embed-responsive-16by9 position-relative bg-light rounded-2 shadow mt-4 mt-md-0 gmaps"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7906.2677509341775!2d110.4077484!3d-7.7756261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59becaae75e9%3A0xf9c76923bed0af5b!2sOase%20Organik!5e0!3m2!1sen!2sid!4v1639619516310!5m2!1sen!2sid"
              width="600"
              height="450"
              class="embed-responsive-item"
              allowfullscreen=""
              loading="lazy"
              style="border: 0px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 30"
      width="100%"
      height="50"
      fill="var(--theme-1-hover)"
      class="overlay-bottom"
    >
      <polygon points="0,0 100,25 100,30 0,30"></polygon>
    </svg>
  </article>
</template>
<script>
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
        type: "article",
        url: "",
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
  data() {
    return {
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0,
      title: "Mengapa Gajihub? Ini Semua Tentang Membangun Bisnis yang Lebih Baik",
      description:
        "Ketahui sejarah, visi, dan misi kami mengembangkan gajihub yang bisa Anda baca secara mendalam melalui halaman ini",
    };
  },
  mounted() {
    document.querySelectorAll(".navbar-dark").forEach((nav) => {
      nav.classList.add("navbar-light");
      nav.classList.remove("navbar-dark");
    });
    this.metadata.og.description = this.description;
    this.metadata.description = this.description;
    this.metadata.og.title = this.title;
    this.metadata.og.url = window.location.origin + "" + this.$route.path;
    this.metadata.og.image =
      "https://gajihub.com/wp-content/uploads/2022/09/bpjs-ketenagakerjaan-1.png";
  },
  methods: {},
};
</script>
