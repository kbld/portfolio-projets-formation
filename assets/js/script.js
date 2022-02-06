$(document).ready(function () {
  var customContainer = jQuery(".iso-container");
  customContainer.isotope({
    filter: "*",
  });

  jQuery("#custom-filter li:first-child > a").addClass("is-checked");

  jQuery("#custom-filter a").click(function () {
    jQuery("#custom-filter .is-checked").removeClass("is-checked");
    jQuery(this).addClass("is-checked");

    var customSelector = jQuery(this).attr("data-filter");
    customContainer.isotope({
      filter: customSelector,
    });
    return false;
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show();
    } else {
      $(".filter")
        .not("." + value)
        .hide();
      $(".filter")
        .filter("." + value)
        .show();
    }
    if ($(".filter-button").removeClass("active")) {
      $(this).addClass("active");
    }
  });
  $(this).addClass("active");
});









