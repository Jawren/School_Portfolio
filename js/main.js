$(document).ready(function () {

    let $btns = $('.project-area .button-group button'); 
    // Purpose to group the button
  
    $btns.click(function (e) {
        console.log("Button clicked");
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
  
        let selector = $(e.target).attr('data-filter');
        console.log("Selector:", selector);
        $('.project-area .grid').isotope({
            filter: selector
        });
  
        return false;
    });
  
    console.log("Triggering button click event for #btn1");
    $('.project-area .button-group #btn1').trigger('click');
  
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
  
      // sticky navigation menu
  
      let nav_offset_top = $('.header_area').height() + 50;
  
      function navbarFixed() {
          if ($('.header_area').length) {
              $(window).scroll(function () {
                  let scroll = $(window).scrollTop();
                  console.log("Scroll position:", scroll);
                  if (scroll >= nav_offset_top) {
                      console.log("Adding navbar_fixed class");
                      $('.header_area .main-menu').addClass('navbar_fixed');
                  } else {
                      console.log("Removing navbar_fixed class");
                      $('.header_area .main-menu').removeClass('navbar_fixed');
                  }
              });
          }
      }
    navbarFixed();
  
  });
  