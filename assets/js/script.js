
window.onload=function(){

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else{ document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

}



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
  



  $(document).ready(function(){
    $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      if(value == "all")
      { 
        $('.filter').show();
      }
      else
      { 
        $(".filter").not('.'+value).hide();
        $('.filter').filter('.'+value).show();
      }
      if ($(".filter-button").removeClass("active")) {
        $(this).addClass("active");
      }
    });
    $(this).addClass("active");
  });










  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".navbar").css("background", "#fff");
        $(".navbar").css("box-shadow", "0 2px 10px 0 rgba(0, 0, 0, 0.15)");
        $(".link-title").css("color", "#000");
        $(".logo").css("fill", "#000");
        $(".link-title:hover").css("border-color", "#000");
      }
  
      else {
        $(".navbar").css("background", "rgb(255, 255, 255, 0)");
        $(".navbar").css("box-shadow", "none");
        $(".link-title").css("color", "#fff");
        $(".logo").css("fill", "#fff");
        $(".link-title:hover").css("border-color", "#fff");

      }
    })
  })