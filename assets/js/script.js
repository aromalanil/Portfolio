/**
 * @author Aromal Anil <aromalanilkannan@gmail.com>
 */

//Hiding the Preloader
$('body').css("overflow", "hidden");
$(window).on('load', () => {
  $('.loader').delay(500).fadeOut();
  $('.loader-body').delay(850).fadeOut('slow');
  $('body').delay(850).css({ 'overflow': 'visible' });

  AOS.refresh();
});



$(document).ready(() => {


  //NavBar Drop Shadow on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.nav-bar').addClass('floatingNav');
    } else {
      $('.nav-bar').removeClass('floatingNav');
    }
  });


  // Menu bar for Mobile
  $('.ham').click(function clickMenu() {

    //Making Side Menu Bar Visible/Invisible On Menu Click
    $('.nav-elements').toggleClass('nav-visible');


    //Making Side Menu Invisible when clicked on any link/btn in menu
    if ($('.nav-elements').hasClass('nav-visible')) {
      $('body').css("overflow", "hidden");
      $('.nav-link').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
      $('.nav-btn').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
    }
    else {
      $('body').css("overflow", "visible");
    }



  });





  //Changing Title Effect
  const b = baffle(".title");
  b.set({
    characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
    speed: 120
  });

  var i = 1;
  let changeTitle = () => {
    let titles = ["Web Developer", "UI/UX Designer", "Android Developer", "Programmer"];
    if (i == titles.length) {
      i = 0;
    }
    b.text(currentText => titles[i]).reveal(1500);
    i++;
  }

  setInterval(changeTitle, 3200);


  //Setting Activate Tab in About Section
  viewTab('skills', "skill-head");




});



function viewTab(tabName, tabHead) {
  $('.tab').removeClass('active');
  $('#' + tabHead).toggleClass('active');

  $('.tab').css({ color: "var(--primary-text)" });
  $('#' + tabHead).css({ color: "var(--red)" });

  $('.tab-contents').css({ display: "none", opacity: "0" });
  $('.' + tabName).css({ display: "block", opacity: "1" });
}
