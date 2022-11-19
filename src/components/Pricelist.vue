<template>
  <article class="parallax-overlay light mb-3">
    <section
      class="parallax py-4 parallax-0"
      data-parallax="https://gajihub.com/wp-content/themes/gajihub/upload/banner-3.jpeg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 30"
        width="100%"
        height="50"
        fill="var(--white)"
        class="overlay-top mt-n4"
      >
        <polygon points="0,0 0,5 50,30 100,5 100,0"></polygon>
      </svg>
      <div class="container pt-5 pb-3">
        <div class="px-xl-5 mx-xl-3">
          <div class="d-flex justify-content-center font-title mb-5 pb-3 pricing-switch">
            <div class="d-flex bg-white rounded-pill shadow p-2">
              <button
                type="button"
                class="btn btn-clear fs-6 position-relative pointer-events-none"
                @click="switchPrice('.pricing-switch', '.pricing')"
              >
                <span>per <b>Tahun</b></span>
                <div class="position-absolute top left right mt-n4">
                  <span class="badge badge-success text-white rounded-pill p-2">10%</span>
                </div>
              </button>
              <div
                class="form-check form-switch custom-control custom-switch custom-switch-lg switch-always-on switch-overlay ml-2"
                @click="switchPrice('.pricing-switch', '.pricing')"
                @input="Ceklist($event)"
              >
                <input
                  class="form-check-input custom-control-input form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchPricing"
                />
                <label class="custom-control-label" for="switchPricing">
                  <span class="sr-only">Switch Pricing</span>
                </label>
              </div>
              <button type="button" class="btn btn-clear fs-6">
                <span class="opacity-5">per <b>Bulan</b></span>
              </button>
            </div>
          </div>
          <div class="row no-gutters pricing">
            <div class="col-md-4 mb-4 pb-2 mt-md-4 pt-md-2">
              <div
                class="card bg-white border-0 rounded-3 rounded-right-md-0 index-1 shadow text-center text-break"
              >
                <div class="card-body py-4 px-lg-4">
                  <h3 class="fs-5 lh-2 text-uppercase font-title font-weight-bold my-2">
                    Gratis
                  </h3>
                  <div class="font-title mt-3 mb-4">
                    <div
                      class="fs-1 d-flex align-items-center justify-content-center text-warning lh-2 mr-4 mr-lg-0 mr-xl-4 pr-2 pr-md-3"
                    >
                      <span class="fs-4 opacity-2 text-dark mb-1 mr-1">Rp</span> <b>0</b>
                      <b class="d-none">0</b>
                    </div>
                    <div class="opacity-3">unlimited karyawan</div>
                  </div>
                  <div class="separator my-3 mx-auto w-75"></div>
                  <ul class="list-group list-group-flush lh-2 mb-0">
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Payroll
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Pajak PPh 21 Otomatis
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Manajemen Karir
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Statistik Karyawan
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Akuntansi
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Unlimited Karyawan
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Manajemen Cuti &amp; Libur
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Manajemen Karyawan
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Employee Self Service Mobile Apps
                    </li>
                    <li
                      class="list-group-item bg-transparent border-0 py-2 px-0 d-none d-md-block"
                    >
                      &nbsp;
                    </li>
                  </ul>
                  <a
                    class="btn btn-warning rounded-pill py-2 pl-4 fs-7 text-uppercase ws-nowrap mx-2"
                    href="/daftar/?requests[]=35"
                    ><div class="d-flex align-items-center">
                      <span class="ml-1 mr-2"> Daftar </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                      >
                        <path
                          fill="#292D32"
                          opacity=".25"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M16.03 11.4699L13.03 8.46994C12.74 8.17994 12.26 8.17994 11.97 8.46994C11.68 8.75994 11.68 9.23994 11.97 9.52994L13.69 11.2499H8.5C8.09 11.2499 7.75 11.5899 7.75 11.9999C7.75 12.4099 8.09 12.7499 8.5 12.7499H13.69L11.97 14.4699C11.68 14.7599 11.68 15.2399 11.97 15.5299C12.12 15.6799 12.31 15.7499 12.5 15.7499C12.69 15.7499 12.88 15.6799 13.03 15.5299L16.03 12.5299C16.32 12.2399 16.32 11.7599 16.03 11.4699Z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div
                  class="card-footer bg-warning w-25 border-0 rounded-3 py-1 mt-2 mb-4 mx-auto"
                ></div>
              </div>
            </div>
            <div class="col-md-4 mb-4 pb-2 index-1">
              <div
                class="card bg-white border-0 rounded-3 index-2 shadow text-center text-break"
              >
                <div class="card-body py-4 px-lg-4">
                  <h3 class="fs-5 lh-2 text-uppercase font-title font-weight-bold my-2">
                    Pro
                  </h3>
                  <div class="font-title mt-3 mb-4">
                    <div
                      class="fs-1 d-flex align-items-center justify-content-center text-theme-1 lh-2 mr-4 mr-lg-0 mr-xl-4 pr-2 pr-md-3"
                    >
                      <span class="fs-4 opacity-2 text-dark mb-1 mr-1">Rp</span>
                      <b>11.900</b> <b class="d-none">13.223</b>
                    </div>
                    <div class="opacity-3">/bulan/karyawan</div>
                  </div>
                  <div class="separator my-3 mx-auto w-75"></div>
                  <ul class="list-group list-group-flush lh-2 mb-0">
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Termasuk Semua Fitur Paket Gratis
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      BPJS Kesehatan &amp; Ketenagakerjaan
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Laporan Performa Karyawan &amp; Penggajian
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Free Training &amp; Implementasi
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Cloud Storage Penyimapanan Data Karyawan
                    </li>
                    <li class="list-group-item bg-transparent border-0 py-2 px-0">
                      Payroll Advance Feature
                    </li>
                    <li
                      class="list-group-item bg-transparent border-0 py-2 px-0 d-none d-md-block"
                    >
                      &nbsp;
                    </li>
                  </ul>
                  <button
                    class="btn btn-danger rounded-pill py-2 pl-4 fs-7 text-uppercase ws-nowrap mx-2"
                    @click="register"
                  >
                    <div class="d-flex align-items-center">
                      <span class="ml-1 mr-2"> Daftar </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                      >
                        <path
                          fill="#292D32"
                          opacity=".25"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M16.03 11.4699L13.03 8.46994C12.74 8.17994 12.26 8.17994 11.97 8.46994C11.68 8.75994 11.68 9.23994 11.97 9.52994L13.69 11.2499H8.5C8.09 11.2499 7.75 11.5899 7.75 11.9999C7.75 12.4099 8.09 12.7499 8.5 12.7499H13.69L11.97 14.4699C11.68 14.7599 11.68 15.2399 11.97 15.5299C12.12 15.6799 12.31 15.7499 12.5 15.7499C12.69 15.7499 12.88 15.6799 13.03 15.5299L16.03 12.5299C16.32 12.2399 16.32 11.7599 16.03 11.4699Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  class="card-footer bg-theme-1 w-25 border-0 rounded-3 py-1 mt-2 mb-4 mx-auto"
                ></div>
              </div>
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
        fill="var(--white)"
        class="overlay-bottom mb-n4"
      >
        <polygon points="100,30 0,30 0,0 50,25 100,0"></polygon>
      </svg>
    </section>
  </article>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      price: null,
    };
  },
  methods: {
    switchPrice(e, t) {
      $(t + " .fs-1 b").toggleClass("d-none"),
        $(e).find("button").toggleClass("pointer-events-none"),
        $(e).find("button>span").toggleClass("opacity-5");
      let a = $(e).find("input");
      null != a.attr("checked") ? a.removeAttr("checked") : a.attr("checked", "checked");
      this.price = a[0].checked;
    },
    Ceklist(event) {
      console.log(event);
    },
    register() {
      const parsed = JSON.stringify({
        pricelist: this.price,
      });
      localStorage.setItem("relatedprice", parsed);
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>
