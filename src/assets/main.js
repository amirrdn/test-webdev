import $ from 'jquery'
function popupYoutube(e, t, a, n) {
  var embed, content;
  $('<div id="popupModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" id="' + t.substring(1) + '">\n\t\t\t<button type="button" class="btn btn-clear position-absolute top right m-1 p-2 text-white modal-close" data-dismiss="modal" aria-label="Close">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">\n\t\t\t\t\t<path d="M17.7,18.8L5.2,6.3C5,6,5,5.5,5.2,5.2C5.5,5,6,5,6.3,5.2l12.4,12.4c0.3,0.3,0.3,0.8,0,1.1C18.5,19,18,19,17.7,18.8z"/>\n\t\t\t\t\t<path d="M5.2,17.7L17.7,5.2C18,5,18.5,5,18.8,5.2C19,5.5,19,6,18.8,6.3L6.3,18.8C6,19,5.5,19,5.2,18.8C5,18.5,5,18,5.2,17.7z"/>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<div class="modal-dialog modal-dialog-centered modal-lg mw-sm-fit-content">\n\t\t\t\t<div class="modal-content bg-transparent border-0">\n\t\t\t\t\t<div class="modal-body p-0">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>').appendTo(e),
  $('[data-target="' + t + '"]').each(function() {
    let e = $(this).find("img").attr("title");
    embed = $(this).data("embed"),
    content = '<div class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-black rounded-3"><div class="spinner-border text-white" role="status" style="width:3rem;height:3rem"><span class="sr-only">Loading...</span></div></div><div class="embed-responsive embed-responsive-16by9 rounded-3"><iframe title="' + e + '" class="embed-responsive-item rounded-3" width="' + a + '" height="' + n + '" src="' + embed + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    $(this).attr("data-detail", content)
    console.log(embed);
  }),
  $(t).on("show.bs.modal", function(e) {
      let t = $(this);
      t.toggleClass("opacity-0"),
      t.find(".modal-body").html($(e.relatedTarget).data("detail")),
      setTimeout(function() {
          t.toggleClass("opacity-0")
      }, 200)
  }),
  $(t).on("hidden.bs.modal", function(e) {
      $(this).find(".modal-body").html("")
  })
}
document.addEventListener("DOMContentLoaded", function () {
  popupYoutube("#popupModal", "#popupYoutube", 800, 450);
});