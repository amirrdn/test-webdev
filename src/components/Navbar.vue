<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-dark shadow">
    <div class="container">
      <div class="d-flex justify-content-center my-2">
        <router-link
          class="navbar-brand d-flex align-items-center text-break ws-init lh-1 py-0 mr-3"
          to="/"
        >
          <img
            width="40"
            height="40"
            src="https://gajihub.com/wp-content/themes/gajihub/assets/img/gajihub-logo-color.svg"
            alt="Logo"
          />
          <span class="sr-only">GajiHub</span>
        </router-link>
      </div>
      <ul class="navbar-nav flex-row align-items-center order-md-2" id="navbarButton">
        <li class="nav-item nav-move my-2 my-md-0 ml-md-2">
          <a
            class="btn btn-warning rounded-pill text-uppercase"
            role="button"
            href="/daftar/"
            ><div class="d-flex align-items-center">
              <span class="fs-7 mx-2"> Daftar <b>Gratis</b> </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
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
        </li>
        <li class="nav-item mx-auto d-md-none">
          <button
            type="button"
            class="btn btn-clear px-0"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            onclick="$(this).find('svg').toggleClass('d-none');$('body').toggleClass('menu-opened')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="currentColor"
            >
              <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
              ></path>
              <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
              ></path>
              <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="currentColor"
              class="d-none"
            >
              <path
                d="M17.7,18.8L5.2,6.3C5,6,5,5.5,5.2,5.2C5.5,5,6,5,6.3,5.2l12.4,12.4c0.3,0.3,0.3,0.8,0,1.1C18.5,19,18,19,17.7,18.8z"
              ></path>
              <path
                d="M5.2,17.7L17.7,5.2C18,5,18.5,5,18.8,5.2C19,5.5,19,6,18.8,6.3L6.3,18.8C6,19,5.5,19,5.2,18.8C5,18.5,5,18,5.2,17.7z"
              ></path>
            </svg>
            <span class="sr-only">Menu</span>
          </button>
        </li>
      </ul>
      <div id="navbarMenu" class="collapse navbar-collapse justify-content-center">
        <ul
          id="menu-header-menu"
          class="navbar-nav d-md-block text-md-center mt-md-n1 fs-6 font-title"
        >
          <li class="nav-item d-md-inline-block mx-md-2 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Solusi
            </a>
            <ul class="dropdown-menu rounded-2">
              <li>
                <router-link
                  :to="{ name: 'payrol' }"
                  class="dropdown-item ws-init"
                  href="/payroll/"
                  >Payroll</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'pph' }" class="dropdown-item ws-init"
                  >Kelola PPh 21</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'bpjs' }" class="dropdown-item ws-init"
                  >BPJS</router-link
                >
              </li>
              <li>
                <router-link to="/" class="dropdown-item ws-init">Akuntansi</router-link>
              </li>
              <li>
                <router-link to="/" class="dropdown-item ws-init"
                  >Kelola Cuti &amp; Izin</router-link
                >
              </li>
              <li>
                <router-link to="/" class="dropdown-item ws-init"
                  >Analisa Data</router-link
                >
              </li>
            </ul>
          </li>
          <li
            id="menu-item-50"
            class="harga menu-item menu-item-type-custom menu-item-object-custom menu-item-50 nav-item d-md-inline-block mx-md-2"
          >
            <router-link to="/" class="nav-link">Harga</router-link>
          </li>
          <li
            id="menu-item-82"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-82 nav-item d-md-inline-block mx-md-2"
          >
            <router-link to="/" class="nav-link">Blog</router-link>
          </li>
          <li
            id="menu-item-81"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-81 nav-item d-md-inline-block mx-md-2"
          >
            <router-link to="/" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
