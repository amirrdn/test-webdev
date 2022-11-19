<template>
  <article class="position-relative bg-theme-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 30"
      width="100%"
      height="50"
      fill="var(--white)"
      class="overlay-top"
    >
      <polygon points="0,0 0,5 50,30 100,5 100,0"></polygon>
    </svg>
    <section class="overflow-hidden text-white">
      <div class="container py-5">
        <div class="row mb-3 text-center">
          <div class="col-md-8 col-lg-7 col-xl-6 mx-auto">
            <h2 class="fs-2 text-break mb-3">Telah Diliput Oleh</h2>
          </div>
        </div>
        <div class="mb-3">
          <div
            id="carousel-client"
            class="carousel slide carousel-multi"
            data-ride="carousel"
            data-pause="false"
            data-interval="4000"
          >
            <div class="carousel-inner row w-100 mx-auto">
              <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                <div
                  class="bg-white text-center shadow rounded-2 py-3 px-4 mx-auto hover-1"
                >
                  <a href="" rel="nofollow">
                    <img
                      class="img-fluid d-block"
                      loading="lazy"
                      width="128"
                      height="37"
                      src="https://gajihub.com/wp-content/uploads/2022/02/tempoco.png"
                      alt="cover-3"
                    />
                  </a>
                </div>
              </div>
              <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                <div
                  class="bg-white text-center shadow rounded-2 py-3 px-4 mx-auto hover-1"
                >
                  <a href="" rel="nofollow">
                    <img
                      class="img-fluid d-block"
                      loading="lazy"
                      width="128"
                      height="37"
                      src="https://gajihub.com/wp-content/uploads/2022/02/itech.png"
                      alt="cover-2"
                    />
                  </a>
                </div>
              </div>
              <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                <div
                  class="bg-white text-center shadow rounded-2 py-3 px-4 mx-auto hover-1"
                >
                  <a href="" rel="nofollow">
                    <img
                      class="img-fluid d-block"
                      loading="lazy"
                      width="128"
                      height="37"
                      src="https://gajihub.com/wp-content/uploads/2022/02/investing.png"
                      alt="cover-1"
                    />
                  </a>
                </div>
              </div>
              <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                <div
                  class="bg-white text-center shadow rounded-2 py-3 px-4 mx-auto hover-1"
                >
                  <a href="https://google.com" rel="nofollow">
                    <img
                      class="img-fluid d-block"
                      loading="lazy"
                      width="128"
                      height="37"
                      src="https://gajihub.com/wp-content/uploads/2022/02/infokomputer.png"
                      alt="cover-0"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-client"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-client"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
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
import $ from "jquery";
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      $("#carousel-client").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $(".carousel-multi .carousel-item").length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            if (e.direction == "left") {
              $(".carousel-multi .carousel-item")
                .eq(i)
                .appendTo(".carousel-multi .carousel-inner");
            } else {
              $(".carousel-multi .carousel-item")
                .eq(0)
                .appendTo(".carousel-multi .carousel-inner");
            }
          }
        }
      });
    });
  },
};
</script>
