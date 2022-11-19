<template>
  <article id="header" class="bg-theme-1 text-white pb-md-4 pb-lg-5 pt-lg-3">
    <div class="container pt-5 pb-5 pb-md-3">
      <h1 class="fs-1 text-break text-center mb-0">Daftar GajiHub Sekarang</h1>
      <p class="fs-6 opacity-7 text-break text-center mt-2 mb-0">
        Dapatkan aplikasi absensi beserta software payroll terlengkap!
      </p>
    </div>
  </article>
  <article>
    <div class="container py-5">
      <form id="registerform">
        <section class="slice slice-lg">
          <div class="row">
            <div class="col-lg-5 py-3">
              <div class="sticky-top top-7" style="top: 100px">
                <p class="mb-2">Pilih Paket</p>
                <div class="custom-radio-dms">
                  <label class="card card-body">
                    <input
                      type="radio"
                      class="option-input radio"
                      name="plan"
                      value="true"
                      :checked="relatedprice.pricelist == true"
                    />
                    <div class="position-relative pl-5">
                      <p class="font-weight-bolder m-0">
                        Paket Pro - Coba Gratis 14 Hari
                      </p>
                      <p class="mb-0">Rp. <b>11.900</b> per bulan</p>
                    </div>
                  </label>
                  <label class="card card-body">
                    <input
                      type="radio"
                      class="option-input radio"
                      name="plan"
                      value="false"
                      :checked="relatedprice.pricelist == false"
                    />
                    <div class="position-relative pl-5">
                      <p class="font-weight-bolder m-0">Paket Gratis</p>
                      <p class="mb-0">Gratis Selamanya</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 py-3">
              <div class="form-group">
                <label class="form-control-label">Nama Lengkap</label>&nbsp;
                <div class="input-group">
                  <div class="input-group-prepend" style="margin-bottom: -49px">
                    <span class="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <input
                  id="register_name"
                  class="form-control form-control-prepend"
                  style="padding-left: 90px"
                  name="register_name"
                  required=""
                  type="text"
                  placeholder="Nama"
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">Nama Perusahaan</label>&nbsp;
                <div class="input-group input-group-merge">
                  <div class="input-group-prepend" style="margin-bottom: -49px">
                    <span class="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-briefcase"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <input
                  id="register_company"
                  class="form-control form-control-prepend"
                  style="padding-left: 90px"
                  name="register_company"
                  required=""
                  type="text"
                  placeholder="PT. XXX"
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">Jabatan di perusahaan sebagai</label
                >&nbsp;
                <div class="input-group input-group-merge">
                  <div class="input-group-prepend" style="margin-bottom: -49px">
                    <span class="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-briefcase"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <input
                  id="register_role"
                  class="form-control form-control-prepend"
                  style="padding-left: 90px"
                  name="register_role"
                  required
                  type="text"
                  placeholder="Pemilik"
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">Jumlah Karyawan</label>&nbsp;
                <div class="input-group input-group-merge">
                  <select id="employee_count" class="custom-select" name="employee_count">
                    <option selected="selected" value="1">1</option>
                    <option value="1">2-5</option>
                    <option value="2">6-10</option>
                    <option value="3">11-25</option>
                    <option value="4">26-50</option>
                    <option value="5">Lebih dari 50</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-control-label">Nomor HP</label>&nbsp;
                <div class="input-group input-group-merge">
                  <div class="input-group-prepend" style="margin-bottom: -49px">
                    <span class="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-phone"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <input
                  id="register_phone"
                  class="form-control form-control-prepend"
                  style="padding-left: 90px"
                  name="register_phone"
                  required=""
                  type="text"
                  placeholder="0812XXXX"
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">Email address</label>&nbsp;
                <div class="input-group input-group-merge">
                  <div class="input-group-prepend" style="margin-bottom: -49px">
                    <span class="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-at-sign"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <input
                  id="register_email"
                  class="form-control form-control-prepend"
                  style="padding-left: 90px"
                  name="register_email"
                  required=""
                  type="email"
                  placeholder="alamat@email.com"
                />
              </div>
              <a href="#" id="showHideReferral"> <u> Masukkan Kode Kupon </u> </a>
              <div style="display: none" id="referral_input">
                <div class="form-group">
                  <label class="form-control-label">Referral</label>&nbsp;
                  <input
                    id="referral"
                    class="form-control form-control-prepend"
                    style="padding-left: 10px"
                    name="referral"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mt-4 text-center">
                <input
                  id="registerbutton"
                  class="btn btn-lg btn-block btn-primary"
                  tabindex="7"
                  type="submit"
                  value="Daftar Sekarang"
                />
              </div>
              <div class="mt-4 text-center">
                <small>Sudah pernah daftar?</small>
                <a class="small font-weight-bold" href="https://app.gajihub.com/"
                  >Login disini</a
                >
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    relatedprice() {
      return JSON.parse(localStorage.getItem("relatedprice"));
    },
  },
};
</script>
