<template>
  <footer>
    <article class="bg-theme-1-hover text-white">
      <div class="container pt-5 pb-4">
        <div class="row">
          <div class="col-md-5">
            <div>
              <router-link to="/"
                ><img
                  class="mb-2"
                  loading="lazy"
                  width="200"
                  height="100"
                  src="https://gajihub.com/wp-content/themes/gajihub/assets/img/gajihub-logo-white.svg"
                  alt="Logo"
              /></router-link>
              <div class="mb-2">
                <a
                  class="text-decoration-none text-white opacity-8"
                  href="https://api.whatsapp.com/send?phone=6285717615833&amp;text=Hallo,%20saya%20ingin%20tanya%20tentang%20GajiHub."
                  rel="noopener"
                  target="_blank"
                >
                  +62 81 222 8000 70
                </a>
              </div>
              <div class="mb-2">
                <a
                  class="text-decoration-none text-white opacity-8"
                  href="mailto:4mir.rdn@gmail.com"
                  rel="noopener"
                  target="_blank"
                >
                  hello@gajihub.com
                </a>
              </div>
              <div class="mb-2">
                <a
                  class="text-decoration-none text-white opacity-8"
                  href="https://goo.gl/maps/nhV6K5kEeW5BNAUW6"
                  rel="noopener"
                  target="_blank"
                >
                  PT Kledo Berhati Nyaman<br />Jl. Kledokan No B10, Catur Tunggal, Depok,
                  DIY, 55281
                </a>
              </div>
            </div>
            <div class="social-media mt-3 mb-n3">
              <a
                class="text-decoration-none d-inline-block text-white mr-3 mb-3"
                rel="noopener"
                target="_blank"
                href="https://id.linkedin.com/in/amirmatahati"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                >
                  <path
                    d="M7.8,2h8.4C19.4,2,22,4.6,22,7.8v8.4c0,3.2-2.6,5.8-5.8,5.8H7.8C4.6,22,2,19.4,2,16.2V7.8C2,4.6,4.6,2,7.8,2 M7.6,4C5.6,4,4,5.6,4,7.6l0,0v8.8c0,2,1.6,3.6,3.6,3.6h8.8c2,0,3.6-1.6,3.6-3.6c0,0,0,0,0,0V7.6c0-2-1.6-3.6-3.6-3.6H7.6 M11.7,20v-5.7H9.7V12h2.1v-1.8c0-2,1.2-3.1,3.1-3.1c0.9,0,1.8,0.2,1.8,0.2v2h-1c-1,0-1.3,0.6-1.3,1.3V12h2.2l-0.4,2.3h-1.9V20"
                  ></path>
                </svg>
                <span class="sr-only">Facebook</span>
              </a>
              <a
                class="text-decoration-none d-inline-block text-white mr-3 mb-3"
                rel="noopener"
                target="_blank"
                href="https://id.linkedin.com/in/amirmatahati"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                >
                  <path
                    d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                  ></path>
                </svg>
                <span class="sr-only">Twitter</span>
              </a>
              <a
                class="text-decoration-none d-inline-block text-white mr-3 mb-3"
                rel="noopener"
                target="_blank"
                href="https://id.linkedin.com/in/amirmatahati"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                >
                  <path
                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  ></path>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <a
                class="text-decoration-none d-inline-block text-white mr-3 mb-3"
                rel="noopener"
                target="_blank"
                href="https://id.linkedin.com/in/amirmatahati"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                >
                  <path
                    d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                  ></path>
                </svg>
                <span class="sr-only">Youtube</span>
              </a>
              <a
                class="text-decoration-none d-inline-block text-white mr-3 mb-3"
                rel="noopener"
                target="_blank"
                href="https://id.linkedin.com/in/amirmatahati"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                >
                  <path
                    d="M21,21v-7.2c0-2.4-2-4.4-4.4-4.4c0,0,0,0,0,0c-1.1,0-2.5,0.7-3.1,1.8V9.7H9.7V21h3.8v-6.7c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9V21H21 M5.3,7.6c1.3,0,2.3-1,2.3-2.3v0C7.6,4,6.5,3,5.3,3C4,3,3,4,3,5.3l0,0C3,6.5,4,7.6,5.3,7.6 M7.2,21V9.7H3.4V21H7.2z"
                  ></path>
                </svg>
                <span class="sr-only">LinkedIn</span>
              </a>
            </div>
            <div class="mt-4">
              <a
                class="d-inline-block mr-2 mb-3"
                rel="noopener"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gajihub.app"
              >
                <img
                  loading="lazy"
                  width="170"
                  height="51"
                  src="https://gajihub.com/wp-content/themes/gajihub/assets/img/available-on-google-play.svg"
                  alt="Google Play"
                />
              </a>
              <a
                class="d-inline-block mr-2 mb-3"
                rel="noopener"
                target="_blank"
                href="https://apps.apple.com/gb/app/gajihub-payroll-absensi/id1604540147?uo=2"
              >
                <img
                  loading="lazy"
                  width="170"
                  height="51"
                  src="https://gajihub.com/wp-content/themes/gajihub/assets/img/available-on-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>
            <div class="mt-4">
              <div class="row">
                <a href="/keamanan/"
                  ><div style="text-align: left">
                    <img
                      style="margin-top: 1px"
                      alt="GajiHub ISO-27001 Certified"
                      src="https://kledo.com/wp-content/uploads/2021/09/output-onlinepngtools.png"
                      width="120px"
                      height="115px"
                      loading="lazy"
                    />
                  </div>
                </a>
                <a href="https://pse.kominfo.go.id/home" target="_blank"
                  ><div style="text-align: left">
                    <img
                      style="margin-left: 10px"
                      alt="GajiHub Terdaftar di PSE KOMINFO"
                      src="https://gajihub.com/wp-content/uploads/2022/09/kominfo-pse.png"
                      width="120px"
                      height="115px"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="row pt-3 pl-lg-4 pl-xl-5 mb-n4 mb-md-0">
              <div class="col-md mb-3 mb-md-0">
                <p class="fs-6 font-weight-bold mb-3 text-uppercase">Tentang Kami</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a class="text-decoration-none text-white opacity-8" href="/tentang/"
                      >Tentang</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Tutorials</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Blog</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Karir</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Keamanan</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Jadwalkan Demo</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link class="text-decoration-none text-white opacity-8" to="/"
                      >Login</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Download Proposal</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md mb-3 mb-md-0 pl-lg-0">
                <p class="fs-6 font-weight-bold mb-3 text-uppercase">Layanan</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link
                      class="text-decoration-none text-white opacity-8"
                      :to="{ name: 'payrol' }"
                      >Penggajian &amp; THR</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link
                      :to="{ name: 'pph' }"
                      class="text-decoration-none text-white opacity-8"
                      >Kelola PPh 21</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link
                      :to="{ name: 'bpjs' }"
                      class="text-decoration-none text-white opacity-8"
                      >Kelola BPJS</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link to="/" class="text-decoration-none text-white opacity-8"
                      >Akuntansi</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link to="/" class="text-decoration-none text-white opacity-8"
                      >Analisa Data</router-link
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <router-link to="/" class="text-decoration-none text-white opacity-8"
                      >Kelola Cuti &amp; Izin</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md mb-3 mb-md-0 pl-lg-0">
                <p class="fs-6 font-weight-bold mb-3 text-uppercase">Tool Bisnis</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a
                      class="text-decoration-none text-white opacity-8"
                      href="https://id.linkedin.com/in/amirmatahati"
                      >Kalkulator PPH 21</a
                    >
                  </li>
                  <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                    <a class="text-decoration-none text-white opacity-8" href="#/slipgaji"
                      >Template Slip Gaji</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="separator my-4 mx-auto w-100 opacity-5"></div>
        <div class="row">
          <div class="col-md-6">
            <div class="small mb-3 mb-md-0" id="copyright">
              <span class="opacity-8"
                >© 2022 <a class="text-decoration-none text-white" href="/">GajiHub</a>
                <span class="opacity-8">by PT Kledo Berhati Nyaman. Developed with </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="var(--white)"
              >
                <path
                  d="M18.8008 9.91016C17.6708 9.91016 16.6608 10.4602 16.0308 11.3002C15.4008 10.4602 14.3908 9.91016 13.2608 9.91016C11.3508 9.91016 9.80078 11.4702 9.80078 13.3902C9.80078 14.1302 9.92078 14.8202 10.1208 15.4502C11.1008 18.5602 14.1408 20.4302 15.6408 20.9402C15.8508 21.0102 16.2008 21.0102 16.4108 20.9402C17.9108 20.4302 20.9508 18.5702 21.9308 15.4502C22.1408 14.8102 22.2508 14.1302 22.2508 13.3902C22.2608 11.4702 20.7108 9.91016 18.8008 9.91016Z"
                ></path>
                <path
                  d="M20.75 8.34156C20.75 8.57156 20.52 8.72156 20.3 8.66156C18.95 8.31156 17.47 8.60156 16.35 9.40156C16.13 9.56156 15.83 9.56156 15.62 9.40156C14.83 8.82156 13.87 8.50156 12.86 8.50156C10.28 8.50156 8.18 10.6116 8.18 13.2116C8.18 16.0316 9.53 18.1416 10.89 19.5516C10.96 19.6216 10.9 19.7416 10.81 19.7016C8.08 18.7716 2 14.9116 2 8.34156C2 5.44156 4.33 3.10156 7.21 3.10156C8.92 3.10156 10.43 3.92156 11.38 5.19156C12.34 3.92156 13.85 3.10156 15.55 3.10156C18.42 3.10156 20.75 5.44156 20.75 8.34156Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="col-md-6 text-md-right">
            <div class="small">
              <a class="text-decoration-none text-white" href="/term/"
                >Syarat &amp; Ketentuan</a
              >
              <span class="opacity-3 mx-2">|</span>
              <a class="text-decoration-none text-white" href="/privacy/"
                >Kebijakan Privasi</a
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </footer>
</template>
